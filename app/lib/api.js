export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://qalert-backend.test/api";

export const endpoints = {
  createUser: () => `${API_BASE_URL}/users`,
  login: () => `${API_BASE_URL}/login`,
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
      const err = new Error(firstMsg || "Validation failed");
      err.status = res.status;
      err.details = data;
      err.url = url;
      throw err;
    }
    const message =
      (data && (data.message || data.error)) ||
      res.statusText ||
      "Request failed";
    const err = new Error(message);
    err.status = res.status;
    err.details = data;
    err.url = url;
    throw err;
  }
  return data;
}

// Login and return token payload
export async function login({ emailAddress, password }) {
  const payload = {
    email_address: emailAddress,
    email: emailAddress,
    password,
  };
  const data = await postJsonPublic(endpoints.login(), payload, {
    headers: { Accept: "application/json" },
  });

  // Normalize token field from possible API shapes
  const token =
    data?.token || data?.access_token || data?.bearer || data?.data?.token;
  if (!token) {
    throw new Error(data?.message || "Login failed: token not found");
  }
  return { token };
}
