"use client";

import { API_BASE_URL } from "@/app/lib/api";

export async function fetchUser() {
  const userId =
    localStorage.getItem("user_id") || localStorage.getItem("userId");
  if (!userId) {
    const err = new Error("Missing user_id in localStorage");
    err.status = 400;
    throw err;
  }

  const token = localStorage.getItem("token");
  const url = `${API_BASE_URL}/users/${encodeURIComponent(userId)}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: token } : {}),
    },
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json().catch(() => null) : await res.text();

  if (!res.ok) {
    const message =
      (data && (data.message || data.error)) ||
      res.statusText ||
      "Request failed";
    const error = new Error(message);
    error.status = res.status;
    error.details = data;
    error.url = url;
    throw error;
  }

  const user = data?.data || data?.user || data;
  return {
    name: user?.name ?? null,
    email_address: user?.email_address ?? user?.email ?? null,
    phone_number: user?.phone_number ?? null,
    id_number: user?.id_number ?? null,
  };
}

export default fetchUser;
