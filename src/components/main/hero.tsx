import { services } from "@/constants/data";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Hero() {
  const navigate = useNavigate();
  const user = false;

  const doSomething = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      toast.warning("Please login to continue using Drexotp!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-4 gap-10 my-6 md:my-10">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 dark:from-primary/20 dark:via-primary/30 dark:to-primary/30 rounded-2xl md:p-10 p-6 flex flex-col flex-1 min-h-full">
        <div className="space-y-4 md:space-y-10">
          <h2 className="text-4xl font-space font-bold text-primary-2 dark:text-primary">
            Fast Virtual Numbers for OTPs.
          </h2>

          <p className="text-sm md:text-lg text-main dark:text-white/90">
            Get instant access to secure virtual numbers for OTP verifications
            on platforms like WhatsApp, Telegram, Facebook, and more — powered by
            <span className="font-space font-semibold"> Drexotp.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="md:mt-auto mt-6">
          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="btn bg-primary text-white border border-primary rounded-xl w-fit px-6 py-3 md:py-4 md:text-base text-sm font-medium"
            >
              Get Started
            </Link>
            <div className="md:hidden block">
              <Link
                to="/login"
                className="btn text-primary-2 dark:text-primary border border-primary-2 rounded-xl w-fit px-6 py-3 md:py-4 md:text-base text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <ul className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <li
              onClick={doSomething}
              key={service.title}
              className={`${service.bg} drop-shadow-xl rounded-xl p-6 md:space-y-8 space-y-4 cursor-pointer hover:scale-[1.02] transition-transform`}
            >
              <service.icon size={30} className={service.color} />
              <span className="font-medium text-sm md:text-base">
                {service.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}