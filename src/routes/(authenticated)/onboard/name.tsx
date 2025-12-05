import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProfileFN } from "~/functions/profiles.fn";
import { profileQueryOptions } from "~/lib/auth/queries";
import { Button } from "~/components/ui/button";
import { Spinner } from "~/components/ui/spinner";
import {
  Field,
  FieldGroup,
} from "~/components/ui/field"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { useAppForm } from "~/components/form/AppForm";
import { nameFormOpts } from "~/components/onboard/name-form";

export const Route = createFileRoute("/(authenticated)/onboard/name")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const form = useAppForm({
    ...nameFormOpts,
    onSubmit: async () => {
      mutation.mutate();
    },
  })

  const mutation = useMutation({
    mutationFn: async () => {
      return await createProfileFN({
        data: {
          username: form.getFieldValue("username"),
          full_name: form.getFieldValue("full_name"),
        },
      });
    },
    onSuccess: async () => {
      // Invalidate and refetch profile
      await queryClient.invalidateQueries({ queryKey: ["profile"] });
      await queryClient.ensureQueryData(profileQueryOptions());

      toast.success("Profile created successfully!");
      navigate({ to: "/onboard/location" });
    },
    onError: (error) => {
      toast.error("Failed to create profile. Please try again.");
      console.error("Profile creation error:", error);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Name and Username</CardTitle>
          <CardDescription>
            Please provide your full name and choose a username to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="name-form" onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }}>
            <FieldGroup>
              <form.AppField name="full_name">
                {(field) => (
                  <field.TextInput id="name" label="Name" />
                )}
              </form.AppField>
              <form.AppField name="username">
                {(field)=>(
                  <field.TextInput id="username" label="Username"/>
                )}
              </form.AppField>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit" form="name-form" disabled={mutation.isPending}>
              {mutation.isPending ? <Spinner /> : null}
              Next
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}

