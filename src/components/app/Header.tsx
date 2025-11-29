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
    <div className="flex w-full items-center justify-between rounded-xl text-2xl">
      <div className="flex items-center justify-center gap-2">
        <GitPullRequestArrowIcon className="h-6 w-6 font-bold" />
        <p>Engin</p>
      </div>
      <NavigationMenu />
      <div className="flex items-center justify-center gap-2">
        <Link to="/a/notifications">
          <Bell
            className={cn("h-4 w-4", isActive("/a/notifications") && "fill-current")}
          />
        </Link>
        <ThemeToggle />
        <AppAvatar />
      </div>
    </div>
  );
}
