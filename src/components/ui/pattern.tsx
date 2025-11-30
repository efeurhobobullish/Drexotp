export default function Pattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] w-full bg-background relative overflow-y-auto">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 20%, var(--foreground) 0%, transparent 60%),
            linear-gradient(120deg, var(--line) 1px, transparent 1px),
            linear-gradient(60deg, var(--line) 1px, transparent 1px)
          `,
          backgroundSize: `
            100% 100%,
            26px 26px,
            26px 26px
          `,
          opacity: "0.5",
          maskImage:
            "radial-gradient(ellipse 75% 80% at 50% 0%, #000 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 80% at 50% 0%, #000 65%, transparent 100%)",
        }}
      />

      {/* Optional Accent Glow (on brand) */}
      <div
        className="absolute inset-x-0 top-[20%] z-0 h-[200px] blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent, #5b64ff) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}