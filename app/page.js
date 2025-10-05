"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4">
      <div className="flex w-full max-w-6xl">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
          <Image
            src="/images/clinic-illustration.png"
            alt="Clinic Illustration"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>

        {/* Right side - Sign in form */}
        <div className="w-full lg:mt-14 lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md px-8 pt-8">
            {/* Logo */}
            <h1 className="text-2xl font-bold mb-8 text-[#25323a]">QAlert</h1>

            <h2 className="text-lg font-semibold mb-6 text-[#25323a]">
              Sign In
            </h2>

            <form className="space-y-4">
              <div>
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
              </div>

              <div>
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
              </div>

              <div className="flex items-center justify-between">
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
              </div>

              <button
                type="submit"
                className="w-full bg-[#4ad294] text-white py-3 px-4 rounded-lg hover:bg-[#3db583] focus:outline-none focus:ring-2 focus:ring-[#4ad294] focus:ring-offset-2 transition-all font-medium hover:cursor-pointer shadow-[4px_4px_0_0_#25323a] active:translate-y-1 active:shadow-[2px_2px_0_0_#25323a]"
              >
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              New user?{" "}
              <a
                href="#"
                className="text-[#4ad294] hover:text-[#3db583] font-medium"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
