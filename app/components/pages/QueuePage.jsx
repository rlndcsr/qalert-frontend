"use client";

import { motion } from "framer-motion";

export default function QueuePage() {
  const status = "Waiting"; // Waiting | Now Serving | Completed | Cancelled
  const statusColor = {
    Waiting: "bg-yellow-100 text-yellow-800 ring-yellow-200",
    "Now Serving": "bg-green-100 text-green-800 ring-green-200",
    Completed: "bg-red-100 text-red-800 ring-red-200",
    Cancelled: "bg-gray-100 text-gray-700 ring-gray-200",
  }[status];

  const stepIndex = {
    Waiting: 0,
    "Now Serving": 1,
    Completed: 2,
    Cancelled: 2,
  }[status];

  const steps = ["Waiting", "Now Serving", "Completed"];

  return (
    <div className="min-h-full pl-48 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-6 md:px-10 py-10 max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 rounded-xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#25323a] tracking-tight">
            My Queue
          </h1>
          <p className="text-gray-600 mt-2">
            Track your queue status in real time.
          </p>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 gap-6 ">
          {/* Current Queue Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-xl"
          >
            <div>
              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
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
                        d="M5 7h14M5 12h9m-9 5h14"
                      />
                    </svg>
                    Queue Number
                  </div>
                  <p className="mt-1 text-lg font-semibold text-[#25323a]">
                    Q-024
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
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
                        d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5 1.343 3.5 3 3.5zm-8 0c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zm8 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm-8 0c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z"
                      />
                    </svg>
                    Position in Line
                  </div>
                  <p className="mt-1 text-lg font-semibold text-[#25323a]">
                    5th
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Estimated Time
                  </div>
                  <p className="mt-1 text-lg font-semibold text-[#25323a]">
                    12:45 PM
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
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
                        d="M8 7V3m8 4V3M3 9h18M5 12h14M5 16h14M5 20h14"
                      />
                    </svg>
                    Date Submitted
                  </div>
                  <p className="mt-1 text-lg font-semibold text-[#25323a]">
                    October 7, 2025
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 sm:col-span-2 lg:col-span-1">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
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
                        d="M9 12h6m-6 4h6M5 7h7l5 5v7a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
                      />
                    </svg>
                    Reason for Visit
                  </div>
                  <p className="mt-1 text-lg font-semibold text-[#25323a]">
                    Medical Consultation
                  </p>
                </div>
              </div>

              {/* Step Indicator */}
              <div className="mt-8">
                <div className="flex items-center justify-center">
                  {steps.map((label, idx) => (
                    <div key={label} className="flex items-center">
                      <div className="flex flex-col items-center text-center w-24 sm:w-28">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm ring-1 ${
                            idx <= stepIndex
                              ? "bg-teal-600 text-white ring-teal-700"
                              : "bg-white text-gray-500 ring-gray-200"
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <span
                          className={`mt-2 text-xs sm:text-sm ${
                            idx <= stepIndex
                              ? "text-teal-700 font-medium"
                              : "text-gray-500"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-16 sm:w-24 h-1 mx-2 sm:mx-4 rounded-full bg-gray-200">
                          <div
                            className={`h-full rounded-full ${
                              idx < stepIndex ? "bg-teal-600" : "bg-transparent"
                            }`}
                            style={{ width: idx < stepIndex ? "100%" : "0%" }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-700 hover:bg-red-50 active:bg-red-100 transition-colors"
                >
                  Cancel Queue
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-[#25323a] px-4 py-2.5 text-sm font-medium text-white hover:opacity-95 active:opacity-90"
                >
                  Refresh Status
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
