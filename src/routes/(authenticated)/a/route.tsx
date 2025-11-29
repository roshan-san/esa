import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "~/components/app/Header";

export const Route = createFileRoute("/(authenticated)/a")({
  component: DashboardIndex,
});

function DashboardIndex() {
  // const { user } = Route.useRouteContext();

  return (
    <div className="flex h-screen w-screen flex-col gap-4 p-4">
      <Header />
      <Outlet />
    </div>
  );
}
