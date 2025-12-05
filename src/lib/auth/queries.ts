import { queryOptions } from "@tanstack/react-query";
import { $getUser } from "./functions";
import { $getProfile } from "~/functions/profiles.fn";

export const authQueryOptions = () =>
  queryOptions({
    queryKey: ["user"],
    queryFn: ({ signal }) => $getUser({ signal }),
  });

export const profileQueryOptions = () =>
  queryOptions({
    queryKey: ["profile"],
    queryFn: ({ signal }) => $getProfile({ signal }),
  });

export type AuthQueryResult = Awaited<ReturnType<typeof $getUser>>;
export type ProfileQueryResult = Awaited<ReturnType<typeof $getProfile>>;
