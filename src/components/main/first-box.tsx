import { Wallet, Coins, Plus, Share2 } from "lucide-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function FirstBox() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-1 gap-4 h-fit">
      <div className="bg-green-50 dark:bg-green-900 rounded-2xl overflow-hidden">
        <div className=" text-green-900 flex justify-between items-center  rounded-lg p-4 bg-gradient-to-r from-green-300 via-green-100 to-green-200 dark:to-green-400">
          <div className="space-y-2">
            <p className="text-sm md:text-xs">Available Balance</p>
            <p className="text-3xl md:text-2xl font-space">
              <CountUp end={2300} separator="," prefix="₦" decimals={2} duration={0.7} />
            </p>
          </div>
          <Wallet size={24} />
        </div>
        <div>
          <div className="flex items-center gap-2 p-4 text-sm font-semibold text-primary-2 dark:text-green-100">
            <Coins className="text-yellow-500" size={20} />
            <p className="text-main">Bonus Points:</p>
            <span className="text-primary-2 dark:text-green-100">
              <CountUp end={80} duration={0.7} separator="," prefix="+" />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-background space-y-4 border border-line dark:bg-secondary rounded-xl p-4 h-full flex flex-col">
        <p className="text-sm">Quick Actions</p>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 mt-auto">
          <Link
            to="/fund-wallet"
            className="btn bg-foreground h-12 px-4 rounded-lg text-sm font-medium"
          >
            <Plus size={20} />
            Fund <span className="hidden md:block">Wallet</span>
          </Link>
          <Link
            to="/share"
            className="btn bg-foreground h-12 px-4 rounded-lg text-sm font-medium"
          >
            <Share2 size={20} />
            Share
          </Link>
        </div>
      </div>
    </div>
  );
}