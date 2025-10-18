export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="text-white/60">© {new Date().getFullYear()} SinglePage. All rights reserved.</p>
        <p className="text-white/50">
          Built with <span style={{ color: "var(--brand)" }}>Next.js</span>, TypeScript, Tailwind v4
        </p>
      </div>
    </footer>
  );
}
