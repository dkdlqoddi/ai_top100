"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#home", label: "홈" },
  { href: "#features", label: "특징" },
  { href: "#contact", label: "문의" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-black/30" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg font-bold" style={{ background: "var(--brand)", color: "#000" }}>
            S
          </span>
          <span className="font-semibold">SinglePage</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white">{n.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary hidden md:inline-flex">시작하기</a>
      </div>
    </header>
  );
}
