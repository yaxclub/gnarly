import db from "@/db/db";
import { users } from "@/db/schema/user";
import { NextResponse } from "next/server";

export async function GET() {
  const u = await db.select().from(users);

  return NextResponse.json(u);
}
