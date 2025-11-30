import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { X, LogOut, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navlinks } from '@/constants/data';

interface SlidingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userAvatar?: string;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ 
  isOpen, 
  onClose, 
  userName = "Gift Jacksun",
  userAvatar = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
}) => {
  const navigate = useNavigate();
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.4 
            }}
            className="absolute left-0 top-0 h-full flex flex-col w-80 max-w-[85vw] bg-background dark:bg-secondary border-r border-line shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-6 border-b border-line"
            >
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="Gobills" className="w-8 h-8" />
                <span className="text-lg font-bold">Menu</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary dark:hover:bg-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>

            {/* User Profile Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="p-6 border-b border-line"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/40">
                  <img
                    src={userAvatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{userName}</p>
                  <p className="text-sm text-muted">A mere mortal</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="p-4"
            >
              <nav className="space-y-2">
                {navlinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-3 text-sm md:text-base p-3 rounded-lg transition-colors group ${
                          isActive ? 'bg-secondary dark:bg-foreground font-semibold text-yellow-500' : 'hover:bg-secondary dark:hover:bg-foreground text-muted'
                        }`
                      }
                    >
                      <link.icon 
                        size={20} 
                        className=" group-hover:text-yellow-500 transition-colors" 
                      />
                      <span className="font-medium text-main">{link.title}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="p-4 border-t border-line mt-auto"
            >
            
              <div className="space-y-2">
                <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  onClick={() => navigate('/security')}
                  className="flex items-center gap-3 p-3 rounded-lg dark:bg-foreground text-sm md:text-base transition-colors group w-full text-left"
                >
                  <Lock size={20} className="text-yellow-500 transition-colors" />
                  <span className="font-medium">Security</span>
                </motion.button>
                <motion.button 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  onClick={handleLogout}
                  className="flex items-center text-red-500 gap-3 font-semibold p-3 rounded-lg bg-red-500/10 text-sm md:text-base transition-colors group w-full text-left"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Logout</span>
                </motion.button>
              </div>
            </motion.div>

           
           
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingMenu;