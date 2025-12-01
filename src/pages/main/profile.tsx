import { MiniLayout } from "@/layouts";
import {
  AvatarUploader,
  ButtonWithLoader,
  InputWithoutIcon,
} from "@/components/ui";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [avatar, setAvatar] = useState<string | undefined>(
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  return (
    <MiniLayout>
      <section className="bg-background dark:bg-secondary rounded-xl border border-line overflow-hidden">
        {/* Header band */}
        <div className="h-28 w-full bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 dark:from-primary/40 dark:via-primary/20 dark:to-primary/40" />

        {/* Avatar */}
        <div className="px-4 sm:px-6 -mt-14">
          <div className="w-fit mx-auto p-2 rounded-full bg-background dark:bg-foreground border border-line">
            <AvatarUploader value={avatar} onChange={setAvatar} size={112} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 grid grid-cols-1 gap-6">
          {/* Profile Information Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-lg font-instrument font-semibold text-main">
              Account Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputWithoutIcon
                type="text"
                label="Display Name"
                placeholder="Empire Tech"
                className="bg-foreground"
              />
              <InputWithoutIcon
                label="Username"
                type="text"
                placeholder="drexemptech"
                className="bg-foreground"
              />
              <InputWithoutIcon
                label="Email"
                type="email"
                placeholder="you@drexotp.com"
                className="bg-foreground"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                className="btn px-4 h-10 flex-1 text-sm font-semibold rounded-lg border border-line"
              >
                Cancel
              </button>
              <ButtonWithLoader
                className="btn btn-primary px-5 h-10 flex-1 text-sm rounded-lg"
                loading={loading}
                initialText="Save changes"
                loadingText="Saving..."
              />
            </div>
          </form>
        </div>
      </section>
    </MiniLayout>
  );
}