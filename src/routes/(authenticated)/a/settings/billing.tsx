import { createFileRoute } from '@tanstack/react-router'
import { Card } from '~/components/ui/card'

export const Route = createFileRoute('/(authenticated)/a/settings/billing')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <Card className='rounded-xl col-span-9 flex justify-center items-center p-2 gap-2'>
    <p className='text-center'>
      Manage subcription billing basic vs pro plans here.
    </p>
  </Card>
  )
}
