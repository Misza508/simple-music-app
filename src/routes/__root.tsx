import { Error } from "@/components/Error/Error";
import { Navigation } from "@/components/Navigation/Navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NotFound } from "../components/NotFound/NotFound";
export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFound />,
  errorComponent: () => <Error />,
});
