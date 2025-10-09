"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  const [activeItem, setActiveItem] = useState("dashboard");

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
      id: "doctors",
      label: "Doctors",
      icon: "/icons/user.png",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-16 bg-[#25323a] flex flex-col items-center py-6">
        {/* Logo */}
        <div className="w-10 h-10 rounded-lg mb-8 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/qalert-icon.png"
            alt="QAlert Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Divider */}
        <div className="w-8 h-px bg-white/20 mb-8"></div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              href={
                item.id === "dashboard"
                  ? "/admin/dashboard"
                  : `/admin/dashboard/${item.id}`
              }
              onClick={() => setActiveItem(item.id)}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center text-white
                transition-all duration-200 hover:bg-white/10
                ${activeItem === item.id ? "bg-white/20" : ""}
              `}
              title={item.label}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert"
              />
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
