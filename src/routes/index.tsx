import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { SignOutButton } from "~/components/app/SignOutButton";
import { Button } from "~/components/ui/button";
import { Spinner } from "~/components/ui/spinner";
import { authQueryOptions } from "~/lib/auth/queries";

export const Route = createFileRoute("/")({
  component: HomePage,
  ssr: false,
});

function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <Suspense fallback={<Spinner className="animate-spin" />}>
        <UserAction />
      </Suspense>
    </div>
  );
}

function UserAction() {
  const { data: user } = useSuspenseQuery(authQueryOptions());

  return user ? (
    <div className="flex flex-col items-center gap-2">
      <p>Welcome back, {user.name}!</p>
      <Button type="button" asChild className="mb-2 w-fit" size="lg">
        <Link to="/a/dashboard">Go to Dashboard</Link>
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
