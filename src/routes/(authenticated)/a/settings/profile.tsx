import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/a/settings/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(authenticated)/a/settings/profile"!</div>
}
