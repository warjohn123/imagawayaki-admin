import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/franchisees")({
  component: FranchiseesPage,
});

function FranchiseesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Franchisees</h1>
      <p>Here you can manage all franchisees.</p>
    </div>
  );
}
