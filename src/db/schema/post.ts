import { mysqlTable, int, varchar, date} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { users } from "@/db/schema/user";
import { comments } from "@/db/schema/comment";

export const posts = mysqlTable("gny_posts", {
  id: int().primaryKey().autoincrement(),
  user_id: int('user_id').references(() => users.id),
  resource_address: varchar({ length: 256 }).notNull().unique(),
  date:  date().notNull().unique(),
  caption: varchar({ length: 256 }),
}); 

export const postRelations = relations(posts, ({ one, many}) => ({
  user: one(users, {
    fields: [posts.user_id],
    references: [users.id],
  }),
  comments: many(comments),
}));

export default { ...posts };
