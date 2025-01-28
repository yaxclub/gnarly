import { mysqlTable, int, varchar, foreignKey, AnyMySqlColumn, date} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { posts } from "@/db/schema/post";
import { users } from "@/db/schema/user";

export const comments = mysqlTable("gny_comments", {
  id: int().primaryKey().autoincrement(),
  post_id: int('post_id').references(() => posts.id),
  user_id: int('user_id').references(() => users.id),
  parent_id: int('parent_id').references((): AnyMySqlColumn => comments.id),
  comment: varchar({ length: 1024 }).notNull(),
  origin: date().notNull(),
}, (table) => {
  return {
    parent_comment: foreignKey({
      columns: [table.parent_id], 
      foreignColumns: [table.id],
      name: "parent_fk"
    })
  }
});

export const commentRelations = relations(comments, ({ one }) => ({
  post: one(posts, {
    fields: [comments.post_id],
    references: [posts.id],
  }),
  user: one(users, {
    fields: [comments.user_id],
    references: [users.id],
  }),
}));


export default { ...comments };
