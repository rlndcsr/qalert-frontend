"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      try {
        // Check for bearer token in localStorage
        const token = localStorage.getItem("adminToken");

        if (!token) {
          // No token found, redirect to admin login
          router.push("/admin/");
          return;
        }

        // Token exists, user is authenticated
        setIsAuthenticated(true);
      } catch (error) {
        // Error accessing localStorage (e.g., SSR), redirect to login
        console.error("Error checking authentication:", error);
        router.push("/admin/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-4 border-[#4ad294] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render children (redirect will happen)
  if (!isAuthenticated) {
    return null;
  }

  // User is authenticated, render the protected content
  return children;
}
