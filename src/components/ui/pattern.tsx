export default function Pattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] w-full bg-background relative overflow-y-auto">
      {/* Tiny dotted pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, var(--line) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px", // Adjust spacing (smaller is denser)
          opacity: "0.3",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 0%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 75% 75% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}