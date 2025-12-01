import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import { Home } from "@/pages";
import { Signup, Login, ResetPassword, ForgotPassword } from "@/pages/auth";
import { Dashboard, Profile, Wallet, Numbers, Transactions, Settings, Help, FundWallet } from "@/pages/main";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" richColors />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Corrected and added missing pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/fund-wallet" element={<FundWallet />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/security" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/transactions" element={<Transactions />} /> {/* ← NEW */}
      </Routes>
    </>
  );
}