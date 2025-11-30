export default function Pattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] w-full bg-background relative overflow-y-auto">
      
      {/* Soft tiny dot pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, var(--line) 0.6px, transparent 0.6px)
          `,
          backgroundSize: "18px 18px",
          opacity: "0.35",
          maskImage:
            "radial-gradient(circle at 50% 30%, #000 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, #000 65%, transparent 100%)",
        }}
      />

      {/* Content above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}