import { createFileRoute } from '@tanstack/react-router'
import { Card } from '~/components/ui/card'

export const Route = createFileRoute('/(authenticated)/a/notifications/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card className='flex-1 flex justify-center items-center'>
      here all teh notifications will be shown
    </Card>
  )
}
