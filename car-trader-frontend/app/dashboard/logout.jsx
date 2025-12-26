export async function logout(router) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/signout", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (data.success) {
      router.push("/");
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
}
