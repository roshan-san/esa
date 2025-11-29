import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_BASE_URL: z.url().default("http://localhost:3000"),
  },
  runtimeEnv: import.meta.env,
});

// Runtime fallback: use current origin if VITE_BASE_URL is not set and we're in the browser
export const getBaseURL = () => {
  if (env.VITE_BASE_URL && env.VITE_BASE_URL !== "http://localhost:3000") {
    return env.VITE_BASE_URL;
  }
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return env.VITE_BASE_URL;
};
