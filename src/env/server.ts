import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

// Auto-detect base URL for production (Vercel)
// Vercel automatically provides VERCEL_URL in production
const defaultBaseURL =
  process.env.VITE_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    VITE_BASE_URL: z.url().default(defaultBaseURL),
    BETTER_AUTH_SECRET: z.string().min(1),

    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
  },
  runtimeEnv: process.env,
});
