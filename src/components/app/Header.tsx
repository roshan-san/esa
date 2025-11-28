import { Bell, GitPullRequestArrowIcon } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import NavigationMenu from "./NavigationMenu";
import { AppAvatar } from "./AppAvatar";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "~/lib/utils";

export default function Header() {
  const { pathname}= useLocation();
  const isActive = (path:string) => pathname.startsWith(path);
  return (
    <div className="flex justify-between items-center text-2xl rounded-xl w-full">
      <div className="flex items-center justify-center gap-2">
        <GitPullRequestArrowIcon className="h-6 w-6 font-bold" />
        <p className=" ">Engin</p>

      </div>
      <NavigationMenu />
      <div className="flex items-center justify-center gap-2">
        <Link  to="/a/notifications">
          <Bell  className={cn("h-4 w-4", isActive("/a/notifications") && "fill-current")} />
        </Link>
        <ThemeToggle />
        <AppAvatar />
      </div>
    </div>
  )
}
