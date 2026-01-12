import { getSupabase } from "@/lib/supabase/server";
import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

export const Route = createFileRoute("/api/order-items")({
  server: {
    handlers: {
      GET: async () => {
        const { data, error } = await getSupabase()
          .from("order_items")
          .select("*");

        if (error) {
          return json({ error: error.message }, { status: 500 });
        }
        return json({ order_items: data }, { status: 200 });
      },
      POST: async ({ request }) => {
        const { name, price } = await request.json();
        const { data, error } = await getSupabase()
          .from("order_items")
          .insert({ name, price })
          .select()
          .single();

        console.log("error", error);
        if (error) {
          return json({ error: error.message }, { status: 500 });
        }
        return json(
          { message: "Order item created", order_item: data },
          { status: 201 }
        );
      },
    },
  },
});
