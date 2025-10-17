"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

export default function PatientLayout({
  children,
  activeIcon,
  setActiveIcon,
  handleSignOut,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-screen bg-[#fafafa] relative overflow-hidden"
    >
      {/* Sidebar Visual Background */}
      <div className="fixed left-0 top-0 bottom-0 w-48 z-40" />
      {/* Logo - Top Left */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="fixed top-8 left-8 z-50 pt-2"
      >
        <Image
          src="/images/qalert-logo1.png"
          alt="QAlert"
          width={150}
          height={40}
          className="h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => window.location.reload()}
        />
      </motion.div>

      {/* Floating Sidebar */}
      <Sidebar
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        handleSignOut={handleSignOut}
      />

      {/* Main Content Area */}
      {children}
    </motion.div>
  );
}
