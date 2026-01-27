export async function FetchListings() {
  try {
    const response = await fetch(
      "https://car-trader-uvry.onrender.com/api/sell/my-listings",
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

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
