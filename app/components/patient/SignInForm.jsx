"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { endpoints } from "../../lib/api";
import { toast } from "sonner";

export default function SignInForm({
  showPassword,
  setShowPassword,
  rememberMe,
  setRememberMe,
  setMode,
  setActiveIcon,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = event.currentTarget;
    const emailInput = form.querySelector("#email_address");
    const passwordInput = form.querySelector("#password");
    const email = emailInput?.value?.trim();
    const password = passwordInput?.value || "";

    if (!email || !password) return;

    try {
      const response = await fetch(endpoints.login(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email_address: email, password }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = data?.message || data?.error || "Login failed";
        const details = data?.errors;
        toast.error(message || "Login failed");
        return;
      }

      const token =
        data?.token || data?.access_token || data?.bearer || data?.data?.token;
      if (!token) {
        toast.error("Login failed: token not found");
        return;
      }

      localStorage.setItem(
        "token",
        token.startsWith("Bearer ") ? token : `Bearer ${token}`
      );
      if (!rememberMe) {
        // Optional: could mirror token to sessionStorage if needed
      }
      setMode("main");
      setActiveIcon && setActiveIcon("home");
    } catch (err) {
      toast.error(err?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  }
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="signin"
      className="flex w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Left side - Illustration (Sign in) */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 justify-center items-center"
        variants={slideInLeft}
      >
        <Image
          src="/images/clinic-illustration.png"
          alt="Clinic Illustration"
          width={520}
          height={520}
          className="object-contain max-h-[520px]"
          priority
        />
      </motion.div>

      {/* Right side - Sign in form */}
      <motion.div
        className="w-full lg:mt-8 lg:w-1/2 flex justify-center"
        variants={fadeIn}
      >
        <div className="w-full max-w-md px-8 pt-4">
          {/* Logo */}
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="/images/qalert-logo1.png"
              alt="QAlert"
              width={260}
              height={60}
              priority
              className="h-12 w-auto object-contain hover:cursor-pointer"
              onClick={() => window.location.reload()}
            />
          </motion.h1>

          <motion.h2
            className="text-lg font-semibold mb-6 text-[#25323a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Sign In
          </motion.h2>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label
                htmlFor="email_address"
                className="block text-sm text-gray-600 mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email_address"
                name="email_address"
                type="email"
                required
                className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] text-[#25323a] placeholder-gray-500"
                placeholder="Enter email address"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-1"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] pr-10 text-[#25323a] placeholder-gray-500"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#4ad294] focus:ring-[#4ad294] focus:ring-offset-0 border-gray-300 rounded accent-[#4ad294]"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600 hover:cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-[#4ad294] hover:text-[#3db583] hover:cursor-pointer"
              >
                Forgot Password?
              </a>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className={`w-full bg-[#4ad294] text-white py-3 px-4 rounded-lg hover:bg-[#3db583] focus:outline-none transition-all font-medium hover:cursor-pointer shadow-[4px_4px_0_0_#25323a] active:translate-y-1 active:shadow-[2px_2px_0_0_#25323a] ${
                isSubmitting ? "opacity-60 pointer-events-none" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </motion.button>
          </motion.form>

          <motion.p
            className="mt-6 text-center text-sm text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            new to QAlert?{" "}
            <button
              type="button"
              onClick={() => {
                setShowPassword(false);
                setMode("signup");
              }}
              className="text-[#4ad294] hover:text-[#3db583] font-medium hover:cursor-pointer"
            >
              Create Account
            </button>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
