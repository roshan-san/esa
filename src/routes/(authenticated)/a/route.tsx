import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "~/components/app/Header";
import { SignOutButton } from "~/components/app/SignOutButton";

export const Route = createFileRoute("/(authenticated)/a")({
  component: DashboardIndex,
});

function DashboardIndex() {
  const { user } = Route.useRouteContext();

  return (
    <div className="flex flex-col h-screen w-screen p-4 gap-4">
      <Header/>
      <Outlet/>
    </div>
  );
}
