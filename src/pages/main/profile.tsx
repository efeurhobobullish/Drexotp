import { motion } from "framer-motion";
import { User, Mail, Edit2, LogOut } from "lucide-react";
import { MainLayout } from "@/layouts";

export default function Profile() {
  // Placeholder data – replace with real user fetch later
  const user = {
    fullName: "John Doe",
    username: "johndoe",
    email: "john@example.com",
  };

  return (
    <MainLayout>
      <div className="main space-y-8 pb-6">
        
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-2"
        >
          <div className="w-20 h-20 rounded-full mx-auto bg-primary text-background center font-space text-xl font-bold">
            {user.fullName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xl font-space font-bold">{user.fullName}</h1>
          <p className="text-muted text-sm">@{user.username}</p>
        </motion.div>

        {/* User Info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-3 bg-secondary dark:bg-foreground border border-line rounded-xl p-4">
            <User size={18} className="text-main/60" />
            <div>
              <p className="text-xs text-muted">Full Name</p>
              <p className="text-sm font-medium">{user.fullName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-secondary dark:bg-foreground border border-line rounded-xl p-4">
            <Mail size={18} className="text-main/60" />
            <div>
              <p className="text-xs text-muted">Email</p>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="space-y-3 pt-2"
        >
          <button className="btn-primary w-full h-10 rounded-md font-semibold">
            <Edit2 size={16} /> Edit Profile
          </button>

          <button className="btn bg-secondary text-main border border-line w-full h-10 rounded-md font-semibold hover:bg-secondary/90 transition">
            <LogOut size={16} /> Logout
          </button>
        </motion.div>
      </div>
    </MainLayout>
  );
}