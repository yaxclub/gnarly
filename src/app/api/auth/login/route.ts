import * as argon from "argon2";
import db from "@/db/db";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema/user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const LoginRequest = z.object({
  username: z.string(),
  password: z.string(),
});

export const POST = async (req: Request): Promise<NextResponse> => {
  
  const { success, data } = LoginRequest.safeParse(await req.json());

  if (!success) {
    return NextResponse.json({ message: "Login failed" });
  }

  const u = await db
    .select()
    .from(users)
    .where(eq(users.username, data.username))
    .limit(1);

  if (u.length < 1){
    return NextResponse.json({ message: "username does not exist" });
  }

  const valid = await argon.verify(u[0].password, data.password);

  if (!valid){
    return NextResponse.json({ message: "password incorrect" });
  }

  const token = jwt.sign({ _id: u[0].id}, (process.env.SECRET_KEY || ""), {
    expiresIn: '7 days',
  });

  const cookie_store = await cookies();
  cookie_store.set('logintoken', token, { maxAge: 604800 });

  return NextResponse.json({ message: true });
}
