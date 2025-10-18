export default function Hero() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <p className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
          Next.js + TypeScript + Tailwind v4
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          심플하지만 강력한 <span style={{ color: "var(--brand)" }}>싱글 페이지</span> 템플릿
        </h1>
        <p className="text-white/70">
          최신 Tailwind v4 구성으로 새롭게 정리했습니다. App Router, TS, Tailwind로 시작해 보세요.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary">지금 문의하기</a>
          <a href="#features" className="btn btn-ghost">특징 보기</a>
        </div>
      </div>

      <div className="card">
        <div className="aspect-[16/10] w-full rounded-xl p-4" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--brand) 30%, transparent), transparent)" }}>
          <div className="h-full w-full rounded-lg border border-white/10 bg-black/40 p-4">
            <ul className="space-y-3 text-sm text-white/80">
              <li>✅ App Router 기반</li>
              <li>✅ TypeScript 구성</li>
              <li>✅ Tailwind v4 + PostCSS 통합</li>
              <li>✅ Lint/Type Check 빌드 무시</li>
              <li>✅ v4 호환 @apply 사용 규칙 반영</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
