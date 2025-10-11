"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AuthGuard from "../../components/AuthGuard";

export default function DashboardLayout({ children }) {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const actualPathname = usePathname();
  const router = useRouter();

  // Set hydration state after component mounts
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle logout
  const handleLogout = () => {
    try {
      // Remove token from localStorage
      localStorage.removeItem("adminToken");
      // Redirect to admin login page
      router.push("/admin/");
    } catch (error) {
      console.error("Error during logout:", error);
      // Still redirect even if localStorage access fails
      router.push("/admin/");
    }
  };

  // Function to get current page title
  const getCurrentPageTitle = () => {
    const currentPath = actualPathname.split("/").pop();
    if (currentPath === "dashboard" || currentPath === "admin") {
      return "Dashboard";
    }
    // Capitalize first letter of the page name
    return currentPath
      ? currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
      : "Dashboard";
  };

  // Function to determine active item based on pathname
  const getActiveItem = () => {
    if (!isHydrated) return null; // Return null during SSR to avoid mismatch
    const currentPath = actualPathname.split("/").pop();
    if (currentPath === "dashboard" || currentPath === "admin") {
      return "dashboard";
    }
    return currentPath || "dashboard";
  };

  // Common transition configurations
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  const headerSpringTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "/icons/dashboard.png",
    },
    {
      id: "queue",
      label: "Queue",
      icon: "/icons/queue.png",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: "/icons/notification.png",
    },
    {
      id: "users",
      label: "Users",
      icon: "/icons/user.png",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "/icons/settings.png",
    },
  ];

  return (
    <AuthGuard>
      <div className="flex h-screen bg-gray-50 relative">
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {!isSidebarHidden && (
            <motion.div
              initial={!isHydrated ? false : { x: -192, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -192, opacity: 0 }}
              transition={springTransition}
              className="w-48 bg-[#25323a] flex flex-col items-center py-3 justify-between absolute left-0 top-0 h-full z-10"
            >
              {/* Top Section */}
              <div className="flex flex-col items-center w-full px-3">
                {/* Logo */}
                <div className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/qalert-icon.png"
                    alt="QAlert Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-8"></div>

                {/* Navigation Items */}
                <nav className="flex flex-col space-y-2 w-full">
                  {sidebarItems.map((item) => {
                    const activeItem = getActiveItem();
                    return (
                      <Link
                        key={item.id}
                        href={
                          item.id === "dashboard"
                            ? "/admin/dashboard"
                            : `/admin/dashboard/${item.id}`
                        }
                        className={`
                    w-full px-3 py-2 rounded-lg flex items-center space-x-3 text-white
                    transition-all duration-200 hover:bg-gray-600/50
                    ${
                      activeItem && activeItem === item.id ? "bg-[#4ad294]" : ""
                    }
                  `}
                        suppressHydrationWarning
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="w-5 h-5 brightness-0 invert flex-shrink-0"
                        />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Section - Logout */}
              <div className="flex flex-col items-center w-full px-3">
                <button
                  onClick={handleLogout}
                  className="w-full px-3 py-2 rounded-lg flex items-center space-x-3 text-white
                transition-all duration-200 hover:bg-red-500/20 hover:cursor-pointer"
                >
                  <Image
                    src="/icons/logout.png"
                    alt="Logout"
                    width={20}
                    height={20}
                    className="w-5 h-5 brightness-0 invert flex-shrink-0"
                  />
                  <span className="text-sm font-medium whitespace-nowrap">
                    Logout
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <motion.div
          className="flex flex-col h-full"
          initial={
            !isHydrated
              ? { marginLeft: 192, width: "calc(100% - 192px)" }
              : undefined
          }
          animate={{
            marginLeft: isSidebarHidden ? 0 : 192,
            width: isSidebarHidden ? "100%" : "calc(100% - 192px)",
          }}
          transition={springTransition}
        >
          {/* Header */}
          <motion.header
            className="bg-white border-b border-gray-200 px-6 py-4"
            initial={{ opacity: 0, scale: 0.95, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              ...headerSpringTransition,
              delay: 0.1,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Sidebar Toggle Button */}
                <motion.button
                  onClick={() => setIsSidebarHidden(!isSidebarHidden)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  title={isSidebarHidden ? "Show sidebar" : "Hide sidebar"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ rotate: isSidebarHidden ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/icons/sidebar.png"
                    alt="Sidebar Toggle"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </motion.button>

                <motion.h1
                  className="text-lg font-semibold text-gray-900"
                  suppressHydrationWarning
                  initial={{ opacity: 0, x: -20, rotateX: -90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3,
                  }}
                  key={getCurrentPageTitle()}
                >
                  {!isHydrated ? "" : getCurrentPageTitle()}
                </motion.h1>
              </div>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  ...headerSpringTransition,
                  delay: 0.4,
                }}
              >
                {/* You can add additional header elements here like user menu, notifications, etc. */}
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">U</span>
                </div>
              </motion.div>
            </div>
          </motion.header>

          <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
        </motion.div>
      </div>
    </AuthGuard>
  );
}
