import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/a/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-1 flex items-center justify-center gap-6 '>
      <p className='text-center text-wrap '>
        Dashboard page showing all teh startups teh at teh user craeted
        and on click of each startup , detailed view of startup will be shown
        with various options to manage teh startup
      </p>
    </div>
  )
}
