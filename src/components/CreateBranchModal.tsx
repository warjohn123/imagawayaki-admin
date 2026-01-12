import { createBranch } from "@/services/branches.service";
import { useState } from "react";
import { toast } from "react-toastify";

type CreateBranchModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
};

export function CreateBranchModal({
  open,
  onClose,
  onCreate,
}: CreateBranchModalProps) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await createBranch(name);
      onCreate();
      setName("");
      onClose();
    } catch (e) {
      toast.error("Failed to create branch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Create Branch</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
