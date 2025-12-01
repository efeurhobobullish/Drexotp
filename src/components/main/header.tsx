import { HelpCircle, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModeToggle, SlidingMenu } from "../ui";

export default function Header() {
  const user = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 inset-x-0 top-0 h-[100px] bg-gradient-to-b from-background dark:from-foreground/90 via-background/90 dark:via-foreground/70 to-transparent" />
      <header className="sticky top-0 z-50">
        <nav className="layout h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 ">
            <img src="/logo.svg" alt="Drexotp" className="w-10 h-10" />
            {!user && (
              <p className="text-2xl font-bold text-shadow-lg">
                Drexotp<span className="text-primary">&bull;</span>
              </p>
            )}
          </Link>

          {!user && (
            <div className="flex items-center md:gap-6 gap-4 ">
              <ModeToggle />
              <a
                href="https://help.drexotp.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <HelpCircle size={20} className="text-yellow-500" />
                <p className="text-sm">Need help?</p>
              </a>
              <div className="md:flex items-center gap-4 hidden">
                <Link
                  to="/login"
                  className="btn text-sm bg-foreground font-semibold border border-line px-6 py-3 rounded-full"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary text-sm font-semibold border border-line px-6 py-3 rounded-full"
                >
                  Register
                </Link>
              </div>
            </div>
          )}

          {user && (
            <div className="flex items-center md:gap-6 sm:gap-4 gap-2 ">
              <ModeToggle />

              <div className="flex items-center gap-2 ">
                <p className="text-sm font-medium hidden md:block">
                  Empire Tech
                </p>
                <div className="md:h-12 md:w-12 h-10 w-10 rounded-full overflow-hidden bg-primary/40">
                  <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  console.log('Menu button clicked, current state:', isMenuOpen);
                  setIsMenuOpen(true);
                }}
                className="h-10 w-10 rounded-full hover:bg-secondary transition-colors flex items-center justify-center"
              >
                <Menu size={24} />
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Sliding Menu */}
      <SlidingMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        userName="Empire Tech"
        userAvatar="https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
      />
    </>
  );
}