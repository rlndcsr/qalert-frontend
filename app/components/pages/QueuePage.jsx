"use client";

import { motion } from "framer-motion";

export default function QueuePage() {
  return (
    <div className="flex items-center justify-center h-full pl-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          className="text-4xl font-bold text-[#25323a] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Queue Management
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Queue functionality coming soon...
        </motion.p>
      </motion.div>
    </div>
  );
}
