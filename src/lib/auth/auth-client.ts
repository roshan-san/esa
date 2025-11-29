import { createAuthClient } from "better-auth/react";
import { getBaseURL } from "~/env/client";

const authClient = createAuthClient({
  baseURL: getBaseURL(),
});

export default authClient;
