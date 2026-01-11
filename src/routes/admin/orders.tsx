import { OrderDTO } from "@/shared/types/order";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin/orders")({
  component: OrdersPage,
});

function OrdersPage() {
  const [orders, setOrders] = useState<OrderDTO[]>([]);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <p>Here you can manage all orders.</p>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mt-5">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Franchisee
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Orders
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {orders.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{item.franchisee_id}</td>
                <td className="px-4 py-3">₱{item.orders.length} items</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    className="px-3 py-1 text-sm rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                    onClick={() => console.log("Edit", item.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="px-3 py-1 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
                    onClick={() => console.log("Delete", item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
