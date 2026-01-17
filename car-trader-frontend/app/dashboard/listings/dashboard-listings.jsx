export async function FetchListings() {
  try {
    const response = await fetch("http://localhost:500/api/sell/my-listings", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching listings:", error);
    return [];
  }
}
