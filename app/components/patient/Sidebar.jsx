"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sidebar({ activeIcon, setActiveIcon }) {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
      {/* Home */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        onClick={() => setActiveIcon("home")}
        className={`w-12 h-12 border-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-105 relative ${
          activeIcon === "home"
            ? "bg-[#def7e4] border-[#4ad294] shadow-lg"
            : "bg-transparent border-[#4ad294]/30 hover:bg-[#def7e4] hover:border-[#4ad294] hover:shadow-xl"
        }`}
      >
        <Image
          src="/icons/home-black.png"
          alt="Home"
          width={24}
          height={24}
          className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Home
        </div>
      </motion.div>

      {/* Queue */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        onClick={() => setActiveIcon("queue")}
        className={`w-12 h-12 border-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-105 relative ${
          activeIcon === "queue"
            ? "bg-[#def7e4] border-[#4ad294] shadow-lg"
            : "bg-transparent border-[#4ad294]/30 hover:bg-[#def7e4] hover:border-[#4ad294] hover:shadow-xl"
        }`}
      >
        <Image
          src="/icons/queue-black.png"
          alt="My Queue"
          width={24}
          height={24}
          className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Queues
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        onClick={() => setActiveIcon("notification")}
        className={`w-12 h-12 border-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-105 relative ${
          activeIcon === "notification"
            ? "bg-[#def7e4] border-[#4ad294] shadow-lg"
            : "bg-transparent border-[#4ad294]/30 hover:bg-[#def7e4] hover:border-[#4ad294] hover:shadow-xl"
        }`}
      >
        <Image
          src="/icons/notification-black.png"
          alt="Notifications"
          width={24}
          height={24}
          className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Notification
        </div>
      </motion.div>

      {/* User */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        onClick={() => setActiveIcon("user")}
        className={`w-12 h-12 border-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-105 relative ${
          activeIcon === "user"
            ? "bg-[#def7e4] border-[#4ad294] shadow-lg"
            : "bg-transparent border-[#4ad294]/30 hover:bg-[#def7e4] hover:border-[#4ad294] hover:shadow-xl"
        }`}
      >
        <Image
          src="/icons/user-black.png"
          alt="User"
          width={24}
          height={24}
          className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          User Settings
        </div>
      </motion.div>
    </div>
  );
}
