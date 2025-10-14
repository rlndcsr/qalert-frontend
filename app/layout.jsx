import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/app/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qalert",
  description: "Your turn, made seamless",
  icons: {
    icon: "/images/qalert-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            },
            className: "toast-custom",
            classNames: {
              toast: "toast-custom",
              description: "toast-description",
              actionButton: "toast-action",
              cancelButton: "toast-cancel",
              closeButton: "toast-close",
              title: "toast-title",
              error: "toast-error",
              success: "toast-success",
              warning: "toast-warning",
              info: "toast-info",
            },
          }}
        />
      </body>
    </html>
  );
}
