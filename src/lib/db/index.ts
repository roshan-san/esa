import { createServerOnlyFn } from "@tanstack/react-start";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env/server";

import * as schema from "~/lib/db/schema";

let driver: ReturnType<typeof postgres> | null = null;

const getDatabase = createServerOnlyFn(() => {
  if (!driver) {
    driver = postgres(env.DATABASE_URL);
  }
  return drizzle({ client: driver, schema, casing: "snake_case" });
});

export const db = getDatabase();
