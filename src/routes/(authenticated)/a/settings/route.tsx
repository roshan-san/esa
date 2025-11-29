import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export const Route = createFileRoute("/(authenticated)/a/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname.startsWith(path);

  const nav = [
    { name: "Profile", path: "/a/settings/profile" },
    { name: "Billing", path: "/a/settings/billing" },
  ];
  return (
    <Card className="grid flex-1 grid-cols-12 gap-2 p-2">
      <Card className="col-span-3 flex flex-col gap-2 rounded-xl p-2">
        {nav.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "rounded-xl px-2 py-2 text-center text-sm transition-all",
              isActive(item.path)
                ? "bg-primary-foreground text-primary hover:opacity-90"
                : "opacity-70",
            )}
          >
            {item.name}
          </Link>
        ))}
      </Card>
      <Outlet />
    </Card>
  );
}
