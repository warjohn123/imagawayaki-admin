import { getSupabase } from "@/lib/supabase/server";
import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

export const Route = createFileRoute("/api/branches")({
  server: {
    handlers: {
      GET: async () => {
        const { data, error } = await getSupabase()
          .from("branches")
          .select("*");

        if (error) {
          return json({ error: error.message }, { status: 500 });
        }
        return json({ branches: data }, { status: 200 });
      },
      POST: async ({ request }) => {
        const { name } = await request.json();
        const { data, error } = await getSupabase()
          .from("branches")
          .insert({ name })
          .select()
          .single();

        console.log("error", error);
        if (error) {
          return json({ error: error.message }, { status: 500 });
        }
        return json(
          { message: "Branch created", branch: data },
          { status: 201 }
        );
      },
    },
  },
});
