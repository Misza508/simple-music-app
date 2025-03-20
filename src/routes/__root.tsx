import { Navigation } from "@/components/Navigation/Navigation";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NotFound } from "../components/NotFound/NotFound";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFound />,
});
