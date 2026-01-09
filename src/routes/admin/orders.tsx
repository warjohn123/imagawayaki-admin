import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/orders")({
  component: OrdersPage,
});

function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <p>Here you can manage all orders.</p>
    </div>
  );
}
