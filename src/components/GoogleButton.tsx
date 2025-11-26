import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import authClient from "~/lib/auth/auth-client";

export function GoogleButton(props: { redirectUrl: string }) {

    const mutation = useMutation({
        mutationFn: async () =>
            await authClient.signIn.social(
                {
                    provider: "google",
                    callbackURL: props.redirectUrl,
                },
                {
                    onError: ({ error }) => {
                        toast.error(
                            error.message || `An error occurred during sign-in.`,
                        );
                    },
                },
            ),
    });
    return (
        <Button
            variant="outline"
            className="w-fit"
            type="button"
            disabled={mutation.isSuccess || mutation.isPending}
            onClick={() => mutation.mutate()}
        >
            <FaGoogle />
            Login with Google
        </Button>
)
}