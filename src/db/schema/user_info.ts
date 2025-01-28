import { mysqlTable, int, varchar, date } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { users } from "@/db/schema/user";

export const user_info = mysqlTable("gny_user_info", {
  id: int('id').primaryKey().autoincrement(),
  user_id: int('user_id').references(() => users.id),
  dob: date().notNull(),
  forename: varchar({ length: 256 }).notNull(),
  surname: varchar({ length: 256 }).notNull(),
  bio: varchar({ length: 512 }),
  picture: varchar({ length: 256 }),
});

export const userInfoRelations = relations(user_info, ({ one }) => ({
  user: one(users, { fields: [user_info.user_id], references: [users.id] }),
}));

export default { ...user_info };
