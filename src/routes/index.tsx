import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { SignOutButton } from "~/components/app/SignOutButton";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { authQueryOptions } from "~/lib/auth/queries";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <Suspense fallback={<div className="py-6">Loading user...</div>}>
        <UserAction />
      </Suspense>

      <div className="fixed top-4 right-4">
          <ThemeToggle />
      </div>
    </div>
  );
}

function UserAction() {
  const { data: user } = useSuspenseQuery(authQueryOptions());
  
  return user ? (
    <div className="flex flex-col items-center gap-2">
      <p>Welcome back, {user.name}!</p>
      <Button type="button" asChild className="mb-2 w-fit" size="lg">
        <Link to="/a">Go to Dashboard</Link>
      </Button>
      <div className="text-center text-xs sm:text-sm">
        Session user:
        <pre className="max-w-screen overflow-x-auto px-2 text-start">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <SignOutButton />
    </div>
  ) : (
    <div className="flex flex-col items-center gap-2">
      <p>You are not signed in.</p>
      <Button type="button" asChild className="w-fit" size="lg">
        <Link to="/login">Log in</Link>
      </Button>
    </div>
  );
}
