import { createFileRoute } from "@tanstack/react-router";
import { Card } from "~/components/ui/card";

export const Route = createFileRoute("/(authenticated)/a/settings/billing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card className="col-span-9 flex items-center justify-center gap-2 rounded-xl p-2">
      <p className="text-center">Manage subcription billing basic vs pro plans here.</p>
    </Card>
  );
}
