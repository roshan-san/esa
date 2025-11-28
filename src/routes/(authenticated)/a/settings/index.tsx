import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/a/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(authenticated)/a/settings/"!</div>
}
