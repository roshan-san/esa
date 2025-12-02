import { createServerFn } from "@tanstack/react-start";
import { createInsertSchema } from "drizzle-zod";
import { authMiddleware } from "~/lib/auth/middleware";
import { db } from "~/lib/db";
import { profileTable } from "~/lib/db/schema";

const ProfileSchema = createInsertSchema(profileTable).omit({
  id: true,
});

export const createProfileFN = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(ProfileSchema)
  .handler(async ({ data, context }) => {
    const { user } = context;
    const [returned] = await db
      .insert(profileTable)
      .values({
        email: data.email,
        full_name: data.full_name,
        id: user.id,
        username: data.username,
        avatar_url: data.avatar_url,
      })
      .returning();
    return returned;
  });
