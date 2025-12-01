import { PhoneCall, Phone, ShieldCheck, Activity, Wallet, Home, UserCog2, HelpCircle } from "lucide-react";

export const libraries = [
    "React Router",
    "Tailwind CSS",
    "Lucide React",
    "React Hook Form",
    "React Query",
    "Zustand",
    "Axios",
    "Zod",
    "Sonner",
    "Framer Motion",
]

export const heroData = {
  title: "Instant Virtual Numbers for OTPs.",
  description:
    "Verify accounts securely and instantly using Drexotp. Get disposable or long-term virtual numbers for platforms like WhatsApp, Telegram, Facebook, and more.",
};

export const services = [
  {
    icon: Phone,
    title: "Get Number",
    href: "/numbers",
    bg: "bg-primary/10",
    color: "text-primary",
    shadow: "shadow-primary/10 dark:shadow-primary/20",
  },
  {
    icon: ShieldCheck,
    title: "Secure OTP",
    href: "/numbers",
    bg: "bg-green-500/10",
    color: "text-green-500",
    shadow: "shadow-green-500/10 dark:shadow-green-500/20",
  },
  {
    icon: Activity,
    title: "Usage History",
    href: "/transactions",
    bg: "bg-amber-500/10",
    color: "text-amber-500",
    shadow: "shadow-amber-500/10 dark:shadow-amber-500/20",
  },
  {
    icon: Wallet,
    title: "Fund Wallet",
    href: "/fund-wallet",
    bg: "bg-primary/10",
    color: "text-primary",
    shadow: "shadow-primary/10 dark:shadow-primary/20",
  },
];

export const navlinks = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Numbers",
    href: "/numbers",
    icon: PhoneCall,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: Wallet,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: UserCog2,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
];