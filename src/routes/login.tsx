import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
// import { login } from "../server/auth.server";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(formData: FormData) {
    setPending(true);
    setError(null);

    try {
      //   await login(formData);
      console.log("form data", formData);
      navigate({ to: "/admin/orders" });
    } catch (err) {
      setError("Invalid email or password");
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        action={onSubmit}
        className="w-full max-w-sm space-y-6 rounded-xl bg-white p-8 shadow"
      >
        {/* Logo / Image */}
        <div className="flex justify-center">
          <img src="/logo512.png" alt="App logo" className="h-16 w-auto" />
        </div>
        <h1 className="text-center text-2xl font-semibold">Sign in</h1>

        {error && (
          <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button
          disabled={pending}
          className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
