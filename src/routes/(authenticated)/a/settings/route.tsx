import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { Card } from '~/components/ui/card'
import { cn } from '~/lib/utils';

export const Route = createFileRoute('/(authenticated)/a/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname.startsWith(path);

  const nav = [
    { name: "Edit Profile", path: "/a/settings/profile" },
    { name: "Billing", path: "/a/settings/billing" },
  ];
  return (
    <Card className="flex-1 grid grid-cols-12 p-2 gap-2">
      <Card className='rounded-xl flex flex-col col-span-3 gap-2 p-2'>
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-2 py-2 rounded-xl text-sm text-center transition-all",
                isActive(item.path)
                  ? "bg-primary-foreground text-primary hover:scale-105"
                  : "opacity-70"
              )}
            >
              {item.name}
            </Link>
          ))}
      </Card>
      <Outlet />
    </Card>
  )
}
