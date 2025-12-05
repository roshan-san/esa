import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { authQueryOptions, profileQueryOptions } from "~/lib/auth/queries";

export const Route = createFileRoute("/(authenticated)")({
  component: Outlet,
  beforeLoad: async ({ context, location }) => {
    // Ensure user is authenticated
    const user = await context.queryClient.ensureQueryData({
      ...authQueryOptions(),
      revalidateIfStale: true,
    });
    if (!user) {
      throw redirect({ to: "/login" });
    }

    // Check if user has a profile
    const profile = await context.queryClient.ensureQueryData({
      ...profileQueryOptions(),
      revalidateIfStale: true,
    });

    // If no profile and not already on onboarding, redirect to onboarding
    if (!profile && !location.pathname.startsWith("/onboard")) {
      throw redirect({ to: "/onboard/name" });
    }

    // If profile exists and user is on onboarding, redirect to dashboard
    if (profile && location.pathname.startsWith("/onboard")) {
      throw redirect({ to: "/a/dashboard" });
    }

    return { user, profile };
  },
});
