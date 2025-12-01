import { MainLayout } from "@/layouts";
import { useState } from "react";
import { CheckCircle, RefreshCcw, ShieldAlert, XCircle } from "lucide-react";
import { ButtonWithLoader } from "@/components/ui";
import { toast } from "sonner";

interface NumberItem {
  id: number;
  phoneNumber: string;
  service: string;
  otp: string | null;
  status: "successful" | "failed" | "refunded" | "pending";
  date: string;
}

export default function MyNumbers() {
  const [numbers, setNumbers] = useState<NumberItem[]>([
    {
      id: 1,
      phoneNumber: "+234 901 234 5678",
      service: "Telegram",
      otp: "726318",
      status: "successful",
      date: "2024-01-20",
    },
    {
      id: 2,
      phoneNumber: "+234 902 345 6789",
      service: "WhatsApp",
      otp: null,
      status: "pending",
      date: "2024-01-18",
    },
    {
      id: 3,
      phoneNumber: "+234 903 456 7890",
      service: "Twitter",
      otp: null,
      status: "failed",
      date: "2024-01-15",
    },
    {
      id: 4,
      phoneNumber: "+234 904 567 8901",
      service: "Google",
      otp: null,
      status: "refunded",
      date: "2024-01-12",
    },
  ]);

  const [refreshingId, setRefreshingId] = useState<number | null>(null);

  const refreshOtp = (id: number) => {
    setRefreshingId(id);
    setTimeout(() => {
      // Random example of OTP retrieval
      const newOtp = Math.random() > 0.5 ? "123456" : null;

      setNumbers((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                otp: newOtp,
                status: newOtp ? "successful" : "failed",
              }
            : item
        )
      );

      toast.success(newOtp ? "OTP retrieved successfully!" : "Failed to retrieve OTP");
      setRefreshingId(null);
    }, 1500);
  };

  const getStatusColor = (status: NumberItem["status"]) => {
    switch (status) {
      case "successful":
        return "text-green-500";
      case "failed":
        return "text-red-500";
      case "refunded":
        return "text-amber-500";
      case "pending":
        return "text-muted";
      default:
        return "text-muted";
    }
  };

  const getStatusIcon = (status: NumberItem["status"]) => {
    switch (status) {
      case "successful":
        return <CheckCircle className="text-green-500" size={20} />;
      case "failed":
        return <XCircle className="text-red-500" size={20} />;
      case "refunded":
        return <ShieldAlert className="text-amber-500" size={20} />;
      case "pending":
        return <RefreshCcw className="text-muted animate-spin" size={20} />;
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="main pb-6 space-y-6">
        <div>
          <h1 className="text-xl font-space font-bold">My Numbers</h1>
          <p className="text-sm text-muted">
            Track purchased numbers, OTP delivery, and refresh if needed.
          </p>
        </div>

        <div className="space-y-4">
          {numbers.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-line bg-background dark:bg-secondary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <p className="font-medium">{item.phoneNumber}</p>
                <p className="text-xs text-muted">{item.service}</p>
                <p className="text-xs text-muted">Purchased: {item.date}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className={`text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>

                {/* OTP Display */}
                <span className="text-sm font-semibold">
                  {item.otp ? item.otp : "--"}
                </span>

                {/* FIXED REFRESH BUTTON AREA */}
                <div className="flex items-center gap-2">
                  <RefreshCcw size={16} />
                  <ButtonWithLoader
                    loading={refreshingId === item.id}
                    initialText="Refresh"
                    loadingText="Refreshing..."
                    className="btn-primary h-9 px-4 rounded-lg text-xs"
                    onClick={() => refreshOtp(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}