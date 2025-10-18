"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`문의가 접수되었습니다: ${email || "이메일 미기입"}`);
    setEmail("");
  };

  return (
    <div className="card">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">시작할 준비 되셨나요?</h3>
          <p className="mt-2 text-white/70">이메일을 남겨주시면 데모와 확장 가이드를 보내드립니다.</p>
        </div>
        <form onSubmit={onSubmit} className="flex w-full items-center gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-xl border border-white/15 bg-black/30 px-4 text-sm outline-none placeholder:text-white/40"
          />
          <button className="btn btn-primary h-12" type="submit">보내기</button>
        </form>
      </div>
    </div>
  );
}
