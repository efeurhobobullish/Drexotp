import { services } from "@/constants/data";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";



export default function Hero() {
  const navigate = useNavigate()

  const user = false
  const doSomething = () => {
if(user) {
  navigate("/dashboard")
} else {
  toast.warning("Please login to use this service!")
}
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-4 gap-10 my-6 md:my-10">
      <div className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 dark:from-green-300 dark:via-green-400 dark:to-green-400 rounded-2xl md:p-10 p-6 flex flex-col flex-1 min-h-full">
        <div className="space-y-4 md:space-y-10">
          <h2 className="text-4xl font-space font-bold text-green-700 dark:text-green-900">
            Quick, Simple Bill Payments.
          </h2>
         
          <p className="text-sm md:text-lg dark:text-green-900">
            Pay your bills quickly and easily with Gobills. We offer a wide
            range of bill payments, including electricity, water, gas, internet,
            and more.
          </p>
        </div>
        <div className="md:mt-auto mt-6">
          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="btn bg-green-700 dark:bg-green-900 text-white border border-green-700 dark:border-green-900 rounded-xl w-fit px-6 py-3 md:py-4 md:text-base text-sm font-medium"
            >
              Get Started
            </Link>
            <div className="md:hidden block">
              <Link
                to="/login"
                className="btn text-green-700 dark:text-green-900 border border-green-700 dark:border-green-900 rounded-xl w-fit px-6 py-3 md:py-4 md:text-base text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ul className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <li
              onClick={doSomething}
              key={service.title}
              className={`${service.bg} drop-shadow-xl rounded-xl p-6 md:space-y-8 space-y-4 `}
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