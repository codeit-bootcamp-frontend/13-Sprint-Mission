import { cookies } from "next/headers";

export async function getUserId() {
  const cookie = await cookies();
  const user = cookie.get("userId")?.value;

  if (!user) return null;

  try {
    const userId = JSON.parse(user);
    return userId;
  } catch {
    return null;
  }
}
