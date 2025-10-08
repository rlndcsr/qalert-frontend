"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdminPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen relative flex items-center justify-center p-3"
    >
      {/* Background with blob scene */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/blob-scene.svg"
          alt="Blob Scene Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Admin Login Form */}
      <motion.div
        className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
      >
        {/* Logo */}
        <h1 className="mb-6 text-center">
          <Image
            src="/images/qalert-logo1.png"
            alt="QAlert Admin"
            width={260}
            height={60}
            priority
            className="h-12 w-auto object-contain mx-auto hover:cursor-pointer"
            onClick={() => window.location.reload()}
          />
        </h1>

        <h2 className="text-xl font-semibold mb-2 text-[#25323a] text-center">
          Admin Portal
        </h2>

        <p className="text-sm text-gray-600 mb-8 text-center">
          Sign in to access the admin dashboard
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="admin-email"
              className="block text-sm text-gray-600 mb-1"
            >
              Admin Email <span className="text-red-500">*</span>
            </label>
            <input
              id="admin-email"
              name="email"
              type="email"
              required
              className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] text-[#25323a] placeholder-gray-500"
              placeholder="Enter admin email"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-sm text-gray-600 mb-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="admin-password"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-admin"
                name="remember-admin"
                type="checkbox"
                className="h-4 w-4 text-[#4ad294] focus:ring-[#4ad294] focus:ring-offset-0 border-gray-300 rounded accent-[#4ad294]"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember-admin"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#4ad294] hover:text-[#3db583]">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4ad294] text-white py-3 px-4 rounded-lg hover:bg-[#3db583] focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:ring-offset-2 transition-all font-medium hover:cursor-pointer shadow-[4px_4px_0_0_#25323a] active:translate-y-1 active:shadow-[2px_2px_0_0_#25323a]"
          >
            Sign in to Admin
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
