import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "../ui/mode-toggle";

export default function Header() {
  return (
    <>
    <div className="fixed  inset-x-0 top-0 h-[100px] bg-gradient-to-b from-background dark:from-foreground/90 via-background/80 dark:via-foreground/70 to-transparent" />
      <header className="sticky top-0 z-50 ">
        <nav className="layout h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 ">
            <img src="/logo.svg" alt="Gobills" className="w-10 h-10" />
            <p className="text-2xl font-bold text-shadow-lg">
              Drexotp<span className="text-primary">&bull;</span>
            </p>
          </Link>

          <div className="flex items-center md:gap-6 gap-4 ">
            <ModeToggle />
            <a
              href="/help"
              target="_blank"
              className="flex items-center gap-2"
            >
              <HelpCircle size={20} className="text-yellow-500" />
              <p className="text-sm">Need help?</p>
            </a>
            
          </div>
        </nav>
      </header>
    </>
  );
}