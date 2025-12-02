import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "~/lib/utils";
import { LayoutDashboardIcon, CompassIcon, SearchIcon } from "lucide-react"

export default function NavigationMenu() {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.startsWith(path);

  const nav = [
    { name: "Dashboard", path: "/a/dashboard", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { name: "Feed", path: "/a/feed", icon: <CompassIcon className="h-4 w-4" /> },
    { name: "Explore", path: "/a/explore", icon: <SearchIcon className="h-4 w-4" /> },
  ];

  return (
    <div className="flex items-center justify-center gap-2">
      {nav.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "flex items-center justify-center gap-2 rounded-xl px-4 py-1.5  text-sm transition-all shadow-accent shadow-xs",
            "hover:bg-accent hover:text-accent-foreground",
            isActive(item.path)
              ? "bg-accent text-accent-foreground "
              : "bg-transparent text-secondary-foreground"
          )}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </div>
  );
}
