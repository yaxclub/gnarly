import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { user_info } from "@/db/schema/user_info";
import { posts } from "@/db/schema/post";

export const users = mysqlTable("gny_users", {
  id: int().primaryKey().autoincrement(),
  username: varchar({ length: 256 }).notNull().unique(),
  email: varchar({ length: 256 }).notNull().unique(),
  password: varchar({ length: 512 }).notNull(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  user_info: one(user_info),  
  posts: many(posts),
}));

export default { ...users };
