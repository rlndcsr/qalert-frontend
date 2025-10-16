"use client";

import { endpoints, postJsonPublic } from "@/app/lib/api";

// Normalize and persist token + user id from a login response
function persistLogin(data) {
  const rawToken =
    data?.token || data?.access_token || data?.bearer || data?.data?.token;
  if (!rawToken) {
    throw new Error("Login failed: token not found");
  }
  const token = rawToken.startsWith("Bearer ")
    ? rawToken
    : `Bearer ${rawToken}`;
  localStorage.setItem("token", token);

  const userId =
    data?.user_id ||
    data?.user?.user_id ||
    data?.data?.user?.user_id ||
    data?.data?.user_id ||
    data?.id ||
    data?.user?.id ||
    data?.data?.id;
  if (userId !== undefined && userId !== null) {
    localStorage.setItem("user_id", String(userId));
  }
}

export async function signIn({ emailAddress, password }) {
  const payload = {
    email_address: emailAddress,
    password,
  };
  let data;
  try {
    data = await postJsonPublic(endpoints.login(), payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    // Surface concise error while preserving original
    console.error("signIn error", err?.message || err, err?.details);
    throw err;
  }
  // persist locally
  persistLogin(data);
  return data;
}

export async function signUp({
  fullName,
  emailAddress,
  password,
  confirmPassword,
  phoneNumber,
  idNumber,
}) {
  const payload = {
    name: fullName,
    email_address: emailAddress,
    password,
    password_confirmation: confirmPassword,
    phone_number: phoneNumber,
    id_number: idNumber || undefined,
  };
  const data = await postJsonPublic(endpoints.createUser(), payload);
  return data;
}

export async function signOut() {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      await fetch(endpoints.logout(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      });
    }
  } catch (_) {
    // ignore network/API errors on logout
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("userId");
  }
}
