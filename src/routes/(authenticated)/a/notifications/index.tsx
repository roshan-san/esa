import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/a/notifications/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-1 flex justify-center items-center'>
      here all teh notifications will be shown
    </div>
  )
}
