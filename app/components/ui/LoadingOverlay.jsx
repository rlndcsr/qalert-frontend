"use client";

import { SyncLoader } from "react-spinners";

export default function LoadingOverlay({
  show = false,
  label = "Signing out...",
  backdropClassName = "",
}) {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 ${backdropClassName}`}
    >
      <div className="flex flex-col items-center gap-4">
        <SyncLoader color="#4ad294" size={12} speedMultiplier={0.9} />
        <span className="text-white text-sm">{label}</span>
      </div>
    </div>
  );
}
