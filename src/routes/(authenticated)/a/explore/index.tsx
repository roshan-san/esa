import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/a/explore/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-1 flex justify-center items-center'>
      to explore teh pitches of other startups , limited view for basic users 
      
    </div>
  )
}
