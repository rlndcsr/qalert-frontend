"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
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

  const slideIn = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4"
    >
      <div className="flex w-full max-w-6xl">
        {/* Left side - Illustration */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <Image
            src="/images/clinic-illustration.png"
            alt="Clinic Illustration"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Right side - Sign in form */}
        <motion.div
          className="w-full lg:mt-14 lg:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="w-full max-w-md px-8 pt-8">
            {/* Logo */}
            <motion.h1
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/images/qalert-logo3.png"
                alt="QAlert"
                width={260}
                height={60}
                priority
                className="h-12 w-auto object-contain"
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
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] text-[#25323a] placeholder-gray-500"
                  placeholder="Enter email"
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
                  Password
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
                    className="ml-2 block text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-[#4ad294] hover:text-[#3db583]"
                >
                  Forgot Password?
                </a>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-[#4ad294] text-white py-3 px-4 rounded-lg hover:bg-[#3db583] focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:ring-offset-2 transition-all font-medium hover:cursor-pointer shadow-[4px_4px_0_0_#25323a] active:translate-y-1 active:shadow-[2px_2px_0_0_#25323a]"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for a more springy feel
                }}
              >
                Sign in
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
              <a
                href="#"
                className="text-[#4ad294] hover:text-[#3db583] font-medium"
              >
                Create Account
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
