import { useState } from "react";
import { MainLayout } from "@/layouts";
import { ButtonWithLoader } from "@/components/ui";
import { toast } from "sonner";
import { Copy, RefreshCcw, Phone, CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface NumberItem {
  id: number;
  number: string;
  service: string;
  otp: string;
  status: "active" | "expired" | "failed" | "refunded";
  lastUpdated: string;
}

export default function MyNumbers() {
  const [numbers, setNumbers] = useState<NumberItem[]>([
    {
      id: 1,
      number: "+234 908 123 4567",
      service: "WhatsApp",
      otp: "483920",
      status: "active",
      lastUpdated: "Just now",
    },
    {
      id: 2,
      number: "+234 907 777 8888",
      service: "Telegram",
      otp: "812345",
      status: "expired",
      lastUpdated: "5 hours ago",
    },
    {
      id: 3,
      number: "+234 816 234 9090",
      service: "Google",
      otp: "—",
      status: "failed",
      lastUpdated: "Not received",
    },
    {
      id: 4,
      number: "+234 901 555 1010",
      service: "Facebook",
      otp: "—",
      status: "refunded",
      lastUpdated: "Refund completed",
    },
  ]);

  const [refreshingId, setRefreshingId] = useState<number | null>(null);

  const refreshOtp = (id: number) => {
    setRefreshingId(id);
    setTimeout(() => {
      setNumbers((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                otp: Math.floor(100000 + Math.random() * 900000).toString(),
                lastUpdated: "Just now",
                status: "active",
              }
            : item
        )
      );
      toast.success("OTP updated!");
      setRefreshingId(null);
    }, 1500);
  };

  const getStatusColor = (status: NumberItem["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-600 dark:text-green-400";
      case "expired":
        return "bg-amber-500/20 text-amber-600 dark:text-amber-400";
      case "failed":
        return "bg-red-500/20 text-red-600 dark:text-red-400";
      case "refunded":
        return "bg-blue-500/20 text-blue-600 dark:text-blue-400";
      default:
        return "";
    }
  };

  const StatusIcon = (status: NumberItem["status"]) => {
    switch (status) {
      case "active":
        return <CheckCircle size={16} />;
      case "expired":
        return <RotateCcw size={16} />;
      case "failed":
        return <XCircle size={16} />;
      case "refunded":
        return <RotateCcw size={16} />;
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="main pb-10 space-y-6">
        <h1 className="text-xl font-space font-bold">My Numbers</h1>
        <p className="text-sm text-muted">
          View all purchased virtual numbers and check OTP history.
        </p>

        <div className="space-y-4">
          {numbers.map((item) => (
            <div
              key={item.id}
              className="bg-background dark:bg-secondary rounded-xl border border-line p-4 space-y-3"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-primary/10 center rounded-lg text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-space font-semibold">{item.number}</p>
                    <p className="text-xs text-muted">{item.service}</p>
                  </div>
                </div>

                <div
                  className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${getStatusColor(
                    item.status
                  )}`}
                >
                  {StatusIcon(item.status)}
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </div>
              </div>

              {/* OTP Display */}
              <div className="bg-foreground p-3 rounded-lg">
                <p className="text-sm">
                  <span className="font-medium">Latest OTP:</span>{" "}
                  {item.otp}
                </p>
                <p className="text-xs text-muted">{item.lastUpdated}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(item.number)}
                  className="btn bg-background border border-line h-10 flex-1 rounded-lg text-sm"
                >
                  <Copy size={16} /> Copy
                </button>

                <ButtonWithLoader
                  loading={refreshingId === item.id}
                  initialText={
                    <span className="flex items-center gap-2">
                      <RefreshCcw size={16} /> Refresh
                    </span>
                  }
                  loadingText="..."
                  className="btn-primary h-10 flex-1 rounded-lg text-sm"
                  onClick={() => refreshOtp(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}