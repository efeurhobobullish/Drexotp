export default function Pattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] w-full bg-background relative overflow-y-scroll">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(var(--main-rgb), 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--main-rgb), 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "12px 12px", // Smaller, tidier grid
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 10%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 10%, #000 70%, transparent 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}