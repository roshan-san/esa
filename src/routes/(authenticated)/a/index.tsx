import { createFileRoute } from "@tanstack/react-router";
import { SignOutButton } from "~/components/SignOutButton";

export const Route = createFileRoute("/(authenticated)/a/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  const { user } = Route.useRouteContext();

  return (
    <div className="flex flex-col min-h-svh justify-center items-center gap-6">
        <pre className="max-w-screen overflow-x-auto px-2 text-start">
          {JSON.stringify(user, null, 2)}
        </pre>
      <SignOutButton />
    </div>
  );
}
