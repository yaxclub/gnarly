import db from "@/db/db";
import { users } from "@/db/schema/user";
import { NextResponse } from "next/server";
import { z } from "zod";
import { eq, or } from "drizzle-orm";
import * as argon from "argon2";
import {user_info}  from "@/db/schema/user_info";

const RegisterRequest = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  dob: z.string().date(),
  forename: z.string(),
  surname: z.string(),
});

export const POST = async (req: Request): Promise<NextResponse> => {

  const { success, data } = RegisterRequest.safeParse(await req.json());

  if (!success) {
    return NextResponse.json({ message: "NI*KINPOOP" });
  }

  const u = await db
    .select()
    .from(users)
    .where(or(eq(users.email, data.email), eq(users.username, data.username)))
    .limit(1);

  if (u.length > 0) {
    return NextResponse.json({ message: "email/username already has an account" });
  }

  const hashed_password = await argon.hash(data.password);

  const result = await db.insert(users).values({
    username: data.username,
    email: data.email, 
    password: hashed_password,
  }).$returningId();

  await db.insert(user_info).values({
    user_id: result[0].id,
    dob: new Date(data.dob),
    forename: data.forename,
    surname: data.surname,
    bio: "",
    picture: "",
  });

  return NextResponse.json(data);
};
