import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="w-full max-w-[400px] px-4 py-6 rounded-xl">
        {children}
      </div>
    </div>
  );
}