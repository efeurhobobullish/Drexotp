export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="w-full max-w-[400px] px-6 py-8 rounded-xl 
        bg-background/70 dark:bg-secondary/70 backdrop-blur-sm shadow-sm border border-line">
        {children}
      </div>
    </div>
  );
}