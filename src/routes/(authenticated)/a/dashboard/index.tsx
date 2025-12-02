import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Spinner } from "~/components/ui/spinner";
import { createProfileFN } from "~/functions/profiles.fn";

export const Route = createFileRoute("/(authenticated)/a/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = Route.useRouteContext();
  const mutation = useMutation({
    mutationFn: async () =>
      await createProfileFN({
        data: {
          email: user.email,
          full_name: user.name,
          username: "highsaaka",
          avatar_url: user.image,
        },
      }),
    onSuccess: () => {
      toast.success("PROFILE CREATED SUCCESFULLY");
    },
    onError: (error) => {
      toast.error("UNKNOWN ERROR OCCURED");
      // only on dev
      console.error(error);
    },
  });

  return (
    <Card className="flex flex-1 items-center justify-center gap-2">
      <Button
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending || mutation.isSuccess}
      >
        {mutation.isPending && <Spinner className="animate-spin" />}
        create Profile
      </Button>
    </Card>
  );
}
