type Feature = { title: string; desc: string; icon: React.ReactNode; };

const features: Feature[] = [
  { title: "최신 v4 대응", desc: "v4 문법(@import, @tailwindcss/postcss)과 @apply 제약 반영.", icon: <IconBolt /> },
  { title: "타입스크립트 기본", desc: "안심하고 확장 가능한 타입 기반 구조.", icon: <IconShield /> },
  { title: "깔끔한 UI", desc: "반투명 카드와 부드러운 섀도우로 가벼운 인상.", icon: <IconCube /> }
];

export default function Features() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((f) => (
        <div key={f.title} className="card">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            {f.icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
          <p className="text-white/70">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 19 6v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    </svg>
  );
}
function IconCube() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 21 7l-9 5L3 7l9-5z" />
      <path d="M3 7v10l9 5 9-5V7" />
    </svg>
  );
}
