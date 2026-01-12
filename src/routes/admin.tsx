// import { getCookie } from "@tanstack/start/server";
import {
  Outlet,
  createFileRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { getCookie } from "@tanstack/react-start/server";
import { useEffect } from "react";

export const Route = createFileRoute("/admin")({
  // Protect all admin routes
  //   beforeLoad: () => {
  //     const session = getCookie("session");
  //     if (!session) {
  //       throw redirect({ to: "/login" });
  //     }
  //   },
  component: AdminLayout,
});

function AdminLayout() {
  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-6 text-2xl font-bold">Imagawayaki</div>
        <nav className="mt-6 flex flex-col gap-2 px-4">
          <a
            href="/admin/orders"
            className={`rounded px-3 py-2 hover:bg-gray-700 ${currentPath === "/admin/orders" ? "bg-gray-700" : ""}`}
          >
            Orders
          </a>
          <a
            href="/admin/franchisees"
            className={`rounded px-3 py-2 hover:bg-gray-700 ${currentPath === "/admin/franchisees" ? "bg-gray-700" : ""}`}
          >
            Franchisees
          </a>
          <a
            href="/admin/branches"
            className={`rounded px-3 py-2 hover:bg-gray-700 ${currentPath === "/admin/branches" ? "bg-gray-700" : ""}`}
          >
            Branches
          </a>
          <a
            href="/admin/order-items"
            className={`rounded px-3 py-2 hover:bg-gray-700 ${currentPath === "/admin/order-items" ? "bg-gray-700" : ""}`}
          >
            Items
          </a>
          <a
            href="/admin/commissary-inventory"
            className={`rounded px-3 py-2 hover:bg-gray-700 ${currentPath === "/admin/commissary-inventory" ? "bg-gray-700" : ""}`}
          >
            Commissary
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
