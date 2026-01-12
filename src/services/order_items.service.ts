export async function createOrderItem(name: string, price: number) {
  try {
    const res = await fetch("/api/order-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    });

    return res;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchOrderItems() {
  try {
    const res = await fetch("/api/order-items");
    const data = await res.json();
    return data.order_items;
  } catch (e) {
    console.error(e);
  }
}
