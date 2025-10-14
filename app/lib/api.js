export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://qalert-backend.test/api";

export const endpoints = {
  createUser: () => `${API_BASE_URL}/users`,
};

// For public/stateless API routes (no cookies/CSRF)
export async function postJsonPublic(url, body, init = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init.headers || {}),
    },
    body: JSON.stringify(body),
    ...init,
  });
  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json().catch(() => null) : await res.text();
  if (!res.ok) {
    if (isJson && res.status === 422 && data && data.errors) {
      // Build a concise validation error string
      const firstField = Object.keys(data.errors)[0];
      const firstMsg = data.errors[firstField]?.[0] || data.message;
      throw new Error(firstMsg || "Validation failed");
    }
    const message =
      (data && (data.message || data.error)) ||
      res.statusText ||
      "Request failed";
    throw new Error(message);
  }
  return data;
}
