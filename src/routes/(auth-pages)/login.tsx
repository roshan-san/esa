import { createFileRoute, redirect } from '@tanstack/react-router'
import { GoogleButton } from '~/components/GoogleButton';
import { authQueryOptions } from '~/lib/auth/queries';

export const Route = createFileRoute('/(auth-pages)/login')({
  component: LoginForm,
  beforeLoad: async ({ context }) => {
    const REDIRECT_URL = "/a/dashboard";
    const user = await context.queryClient.ensureQueryData({
      ...authQueryOptions(),
      revalidateIfStale: true,
    });
    if (user) {
      throw redirect({
        to: REDIRECT_URL,
      });
    }
    return {
      redirectUrl: REDIRECT_URL,
    };
  },
})

function LoginForm() {
  const { redirectUrl } = Route.useRouteContext();
  return (
    <div className="flex flex-col p-6 gap-6 min-h-svh items-center justify-center">
      <GoogleButton redirectUrl={redirectUrl} />
    </div>
  );
}
