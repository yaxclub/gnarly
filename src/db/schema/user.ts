import { int, mysqlTable, varchar, date } from "drizzle-orm/mysql-core";

export const users = mysqlTable("gny_users", {
  id: int().primaryKey().autoincrement(),
  email: varchar({ length: 256 }).notNull().unique(),
  password: varchar({ length: 512 }).notNull(),
  dob: date().notNull(),
  forename: varchar({ length: 256 }).notNull(),
  surname: varchar({ length: 256 }).notNull(),
  bio: varchar({ length: 512 }),
  picture: varchar({ length: 256 }),
});

export default { ...users };
