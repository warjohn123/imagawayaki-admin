import { UserDTO } from "@/shared/types/users";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin/franchisees")({
  component: FranchiseesPage,
});

function FranchiseesPage() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Franchisees</h1>
      <p>Here you can manage all franchisees.</p>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mt-5">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Branch
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">₱{item.branch}</td>
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

            {[].length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
