import { CreditCard, HelpCircle, Home, Phone, PhoneCall, Plug, Tv, UserCog2, Wallet, Wifi } from "lucide-react"

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
    title: "Quick, Simple Bill Payments.",
    description: "Pay your bills quickly and easily with Gobills. We offer a wide range of bill payments, including electricity, water, gas, internet, and more.",
}


export const services = [
    {
        icon: PhoneCall,
        title: "Airtime",
        href: "/airtime",
        bg: "bg-blue-500/10",
        color: "text-blue-500",
        shadow: "shadow-blue-500/10 dark:shadow-blue-500/20"
    },
    {
        icon: Wifi,
        title: "Buy Data",
        href: "/data",
        bg: "bg-green-500/10",
        color: "text-green-500",
        shadow: "shadow-green-500/10 dark:shadow-green-500/20"
    },
    {
        icon: Plug,
        title: "Electricity",
        href: "/electricity",
        bg: "bg-amber-500/10",
        color: "text-amber-500 dark:text-amber-400",
        shadow: "shadow-amber-500/10 dark:shadow-amber-500/20"
    },
    {
        icon: Tv,
        title: "Cable TV",
        href: "/cable",
        bg: "bg-violet-500/10",
        color: "text-violet-500",
        shadow: "shadow-violet-500/10 dark:shadow-violet-500/20"
    },
    {
        icon: CreditCard,
        title: "USD Virtual Card",
        href: "/usd",
        bg: "bg-red-500/10",
        color: "text-red-500",
        shadow: "shadow-red-500/10 dark:shadow-red-500/20"
    },
    {
        icon: Phone,
        title: "Virtual Number",
        href: "/number",
        bg: "bg-orange-500/10",
        color: "text-orange-500",
        shadow: "shadow-orange-500/10 dark:shadow-orange-500/20"
    },
]

export const navlinks = [
    {
        title: "Home",
        href: "/dashboard",
        icon: Home
    },
    {
        title: "Transactions",
        href: "/fund-wallet",
        icon: Wallet
    },
    {
        title: "Profile",
        href: "/profile",
        icon: UserCog2
    },
    {
        title: "Help",
        href: "/settings",
        icon: HelpCircle
    }
]