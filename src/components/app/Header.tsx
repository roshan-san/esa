import { GitPullRequestArrowIcon } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import NavigationMenu from "./NavigationMenu";
import { AppAvatar } from "./AppAvatar";

export default function Header() {
  return (
    <div className="flex justify-between items-center text-2xl font-bold bg-orange rounded-2xl w-full">
      <div className="flex items-center justify-center gap-2">
        <GitPullRequestArrowIcon className="h-6 w-6 font-bold" />
        <p className=" ">Engin</p>

      </div>
      <NavigationMenu />
      <div className="flex items-center justify-center gap-2">
        <ThemeToggle />
        <AppAvatar />
      </div>
    </div>
  )
}
