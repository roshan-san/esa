import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "~/lib/utils";

export default function NavigationMenu() {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.startsWith(path);

  const nav = [
    { name: "Dashboard", path: "/a/dashboard" },
    { name: "Explore", path: "/a/explore" },
    { name: "Notifications", path: "/a/notifications" },
  ];

  return (
    <div className="flex justify-center items-center gap-4">
      {nav.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "px-4 py-1 rounded-2xl text-sm transition-all",
            isActive(item.path)
              ? "bg-accent hover:text-accent-foreground font-semibold"
              : "opacity-70"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
