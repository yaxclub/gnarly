import db from "@/db/db";
import { users } from "@/db/schema/user";
import { NextResponse } from "next/server";
import { z } from "zod";
import { eq } from "drizzle-orm";
import * as argon from "argon2";

const RegisterRequest = z.object({
  email: z.string(),
  password: z.string(),
  dob: z.string().date(),
  forename: z.string(),
  surname: z.string(),
});

export const POST = async (req: Request): Promise<NextResponse> => {
  const { success, data } = RegisterRequest.safeParse(await req.json());

  if (!success) {
    return NextResponse.json({ message: "you idiot" });
  }

  const u = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email))
    .limit(1);

  if (u.length > 0) {
    return NextResponse.json({ message: "email already has an account" });
  }

  const hashed_password = await argon.hash(data.password);

  const result = await db.insert(users).values({
    email: data.email,
    dob: new Date(data.dob),
    forename: data.forename,
    surname: data.surname,
    password: hashed_password,
    bio: "",
    picture: "",
  });
  console.log(result);

  return NextResponse.json(data);
};
