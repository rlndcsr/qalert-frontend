"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import fetchUser from "@/app/lib/fetchUser";

export default function HomePage({ handleSignOut }) {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    phoneNumber: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const user = await fetchUser();
        if (cancelled) return;
        setFormData((prev) => ({
          ...prev,
          name: user?.name || "",
          idNumber: user?.id_number || "",
          phoneNumber: user?.phone_number || "",
        }));
      } catch (_) {
        // ignore; user might not be logged in yet or fetch failed
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        idNumber: "",
        phoneNumber: "",
        reason: "",
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.phoneNumber && formData.reason;

  if (submitSuccess) {
    return (
      <div className="flex items-center justify-center h-full pl-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="w-20 h-20 bg-[#4ad294] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold text-[#25323a] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Queue Entry Submitted!
          </motion.h2>

          <motion.p
            className="text-[#25323a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            You have been added to the queue. You will be notified when it's
            your turn.
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full pl-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#25323a] mb-3">Join Queue</h1>
          <p className="text-[#25323a] text-md">
            Fill out the form below to enter the waiting line
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="p-8"
        >
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Name Field - Top Left */}
            <div className="md:col-span-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-[#25323a] mb-3 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#4ad294]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#4ad294] focus:border-[#4ad294] transition-all duration-300 bg-white text-[#25323a] placeholder-gray-500 hover:border-gray-400 focus:scale-[1.02]"
                placeholder="Enter your full name"
              />
            </div>

            {/* ID Number Field - Top Middle */}
            <div className="md:col-span-1">
              <label
                htmlFor="idNumber"
                className="text-sm font-semibold text-[#25323a] mb-3 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#4ad294]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
                ID Number
              </label>
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#4ad294] focus:border-[#4ad294] transition-all duration-300 bg-white text-[#25323a] placeholder-gray-500 hover:border-gray-400 focus:scale-[1.02]"
                placeholder="Enter your ID number"
              />
            </div>

            {/* Phone Number Field - Top Right */}
            <div className="md:col-span-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-semibold text-[#25323a] mb-3 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#4ad294]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#4ad294] focus:border-[#4ad294] transition-all duration-300 bg-white text-[#25323a] placeholder-gray-500 hover:border-gray-400 focus:scale-[1.02]"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Reason Field - Bottom Left (spans 2 columns) */}
            <div className="md:col-span-2">
              <label
                htmlFor="reason"
                className="text-sm font-semibold text-[#25323a] mb-3 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#4ad294]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Reason for Visit *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#4ad294] focus:border-[#4ad294] transition-all duration-300 bg-white resize-none text-[#25323a] placeholder-gray-500 hover:border-gray-400 focus:scale-[1.01]"
                placeholder="Describe the reason for your visit"
              />
            </div>

            {/* Submit Button - Bottom Right */}
            <div className="md:col-span-1 flex items-end pb-3">
              <motion.button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full px-6 py-4 rounded-lg font-medium text-base transition-all duration-200 shadow-[4px_4px_0_0_#25323a] active:translate-y-1 active:shadow-[2px_2px_0_0_#25323a] ${
                  isFormValid && !isSubmitting
                    ? "bg-[#4ad294] text-white hover:bg-[#3db583] focus:outline-none focus:ring-4 focus:ring-[#4ad294]/30 hover:cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
                whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Queue Entry"
                )}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
