"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SignUpForm({ showPassword, setShowPassword, setMode }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 40, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="signup"
      className="flex w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Left side - Sign up form (swapped position) */}
      <motion.div
        className="w-full mt-6 lg:mt-0 lg:w-1/2 flex justify-center"
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
            Create your account
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
              transition={{ delay: 0.65, duration: 0.45 }}
            >
              <label
                htmlFor="fullname"
                className="block text-sm text-gray-600 mb-1"
              >
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] text-[#25323a] placeholder-gray-500"
                placeholder="Enter full name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.45 }}
            >
              <label
                htmlFor="email_address"
                className="block text-sm text-gray-600 mb-1"
              >
                Email address <span className="text-red-500">*</span>
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

            {/* Phone and ID side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.45 }}
              >
                <label
                  htmlFor="phone_number"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  required
                  className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] text-[#25323a] placeholder-gray-500"
                  placeholder="Enter phone number"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.45 }}
              >
                <label
                  htmlFor="id_number"
                  className="block text-sm text-gray-600 mb-1"
                >
                  ID number
                </label>
                <input
                  id="id_number"
                  name="id_number"
                  type="text"
                  className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] text-[#25323a] placeholder-gray-500"
                  placeholder="Enter ID number"
                />
              </motion.div>
            </div>

            {/* Password and Confirm password side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.45 }}
              >
                <label
                  htmlFor="signup_password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="signup_password"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.45 }}
              >
                <label
                  htmlFor="signup_confirm_password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Confirm password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="signup_confirm_password"
                    name="confirm_password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full text-sm px-4 py-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:border-[#4ad294] pr-10 text-[#25323a] placeholder-gray-500"
                    placeholder="Re-enter password"
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
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#4ad294] text-white py-3 px-4 rounded-lg hover:bg-[#3db583] focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:ring-offset-2 transition-all font-medium hover:cursor-pointer shadow-[4px_4px_0_0_#25323a] active:translate-y-1 active:shadow-[2px_2px_0_0_#25323a]"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              Create account
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
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                setShowPassword(false);
                setMode("signin");
              }}
              className="text-[#4ad294] hover:text-[#3db583] font-medium"
            >
              Back to Sign In
            </button>
          </motion.p>
        </div>
      </motion.div>

      {/* Right side - Illustration (Sign up) */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 justify-center items-center"
        variants={slideInRight}
      >
        <Image
          src="/images/register-account.png"
          alt="Register Illustration"
          width={520}
          height={520}
          className="object-contain max-h-[520px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
