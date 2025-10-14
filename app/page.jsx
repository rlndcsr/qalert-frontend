"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/patient/LoadingScreen";
import PatientLayout from "./components/patient/PatientLayout";
import HomePage from "./components/pages/HomePage";
import QueuePage from "./components/pages/QueuePage";
import NotificationPage from "./components/pages/NotificationPage";
import UserSettingsPage from "./components/pages/UserSettingsPage";
import SignInForm from "./components/patient/SignInForm";
import SignUpForm from "./components/patient/SignUpForm";

export default function Home() {
  const [mode, setMode] = useState("loading"); // "loading" | "signin" | "signup" | "main"
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeIcon, setActiveIcon] = useState("home"); // Track which icon is active

  // Check authentication state on component mount
  useEffect(() => {
    const checkAuthState = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setMode("main");
      } else {
        setMode("signin");
      }
    };

    checkAuthState();
  }, []);

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setMode("signin");
  };

  // Conditional rendering based on mode
  if (mode === "loading") {
    return <LoadingScreen />;
  }

  if (mode === "main") {
    return (
      <PatientLayout activeIcon={activeIcon} setActiveIcon={setActiveIcon}>
        {activeIcon === "home" && <HomePage handleSignOut={handleSignOut} />}
        {activeIcon === "queue" && <QueuePage />}
        {activeIcon === "notifications" && <NotificationPage />}
        {activeIcon === "user" && <UserSettingsPage />}
      </PatientLayout>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-auto md:overflow-hidden flex items-center justify-center bg-[#fafafa] p-3"
    >
      <div className="flex w-full max-w-6xl">
        <AnimatePresence mode="wait">
          {mode === "signin" ? (
            <SignInForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
              setMode={setMode}
              setActiveIcon={setActiveIcon}
            />
          ) : (
            <SignUpForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setMode={setMode}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
