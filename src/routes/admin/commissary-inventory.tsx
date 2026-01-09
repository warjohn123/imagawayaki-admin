import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/commissary-inventory")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/commissary-inventory"!</div>;
}
