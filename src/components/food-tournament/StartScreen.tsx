import { Sparkles, Trophy, UtensilsCrossed } from "lucide-react";

export function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center animate-card-in">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-amber-200/90 mb-8">
          <Sparkles className="h-3.5 w-3.5" /> Food World Cup · 2026
        </div>

        <h1
          className="text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient-amber">오늘 뭐 먹지?</span>
        </h1>

        <p className="text-slate-300/90 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed">
          매번 반복되는 메뉴 고민, 오늘은 <span className="text-amber-300 font-semibold">16강 토너먼트</span>로
          가볍고 즐겁게 결정해요.
        </p>

        <button
          onClick={onStart}
          className="btn-amber inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-xl md:text-2xl animate-pulse-glow"
        >
          <Trophy className="h-6 w-6" />
          16강 시작하기
        </button>

        <div className="mt-16 grid grid-cols-3 gap-3 max-w-md mx-auto text-slate-400 text-xs">
          <FeatureChip icon={<UtensilsCrossed className="h-4 w-4" />} label="16개 메뉴" />
          <FeatureChip icon={<Sparkles className="h-4 w-4" />} label="랜덤 대진" />
          <FeatureChip icon={<Trophy className="h-4 w-4" />} label="1위 결정" />
        </div>
      </div>
    </main>
  );
}

function FeatureChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass rounded-xl px-3 py-2 flex items-center justify-center gap-2 text-slate-300">
      {icon}
      <span>{label}</span>
    </div>
  );
}