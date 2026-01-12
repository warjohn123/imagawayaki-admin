export async function createBranch(name: string) {
  try {
    const res = await fetch("/api/branches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    return res;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchBranches() {
  try {
    const res = await fetch("/api/branches");
    const data = await res.json();
    return data.branches;
  } catch (e) {
    console.error(e);
  }
}
