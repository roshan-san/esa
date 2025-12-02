import { Link, useLocation } from "@tanstack/react-router";
import { Bell, GitPullRequestArrowIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { AppAvatar } from "./AppAvatar";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname.startsWith(path);
  return (
    <div className="flex w-full items-center justify-between rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <GitPullRequestArrowIcon className="h-5 w-5" />
        <p className="tracking-tight font-semibold text-xl ">ENGIN</p>
      </div>
      <NavigationMenu />
      <div className="flex items-center justify-center gap-2">
        <Link to="/a/notifications"
          className={cn(
            "flex items-center justify-center gap-2 rounded p-2 text-sm transition-all shadow-accent shadow-2xs",
            "hover:bg-accent hover:text-accent-foreground",
            isActive("/a/notifications")
              ? "bg-accent text-accent-foreground"
              : "bg-transparent text-secondary-foreground",
          )}
        >
          <Bell className="h-4 w-4" />
        </Link>
        <ThemeToggle />
        <AppAvatar />
      </div>
    </div>
  );
}
