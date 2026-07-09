import { Crown, MapPin, RotateCcw } from "lucide-react";
import type { Food } from "@/lib/foods";

export function ResultScreen({ winner, onReset }: { winner: Food; onReset: () => void }) {
  const openNaver = () => {
    const q = encodeURIComponent(`${winner.name} 맛집`);
    window.open(`https://map.naver.com/p/search/${q}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => {
          const colors = ["#fbbf24", "#f97316", "#ef4444", "#fde68a", "#fb923c"];
          const left = (i * 37) % 100;
          const delay = (i % 10) * 0.25;
          const dur = 4 + ((i * 7) % 5);
          return (
            <span
              key={i}
              className="absolute top-0 h-3 w-2 rounded-sm"
              style={{
                left: `${left}%`,
                background: colors[i % colors.length],
                animation: `confetti-fall ${dur}s linear ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-xl w-full text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-amber-200 mb-6 animate-card-in">
          <Crown className="h-3.5 w-3.5" /> Champion Selected
        </div>

        <h1
          className="text-4xl md:text-5xl mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient-amber">오늘의 메뉴는!</span>
        </h1>

        <div className="relative mx-auto animate-winner-pop">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 blur-2xl opacity-70 animate-pulse-glow" />
          <div
            className={`relative rounded-[2rem] p-1 bg-gradient-to-br ${winner.gradient}`}
            style={{ boxShadow: "0 0 0 4px rgba(251,191,36,0.9), 0 30px 80px -20px rgba(249,115,22,0.7)" }}
          >
            <div className="rounded-[calc(2rem-4px)] bg-slate-950/85 backdrop-blur-md px-8 py-14 md:py-16 flex flex-col items-center gap-6">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 flex items-center justify-center shadow-xl border-4 border-slate-950">
                  <Crown className="h-8 w-8 text-slate-950" />
                </div>
              </div>
              <div className="text-9xl md:text-[10rem] drop-shadow-[0_10px_30px_rgba(251,191,36,0.5)]">
                {winner.emoji}
              </div>
              <div
                className="text-5xl md:text-6xl text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {winner.name}
              </div>
              <div className="text-amber-200/80 text-sm tracking-[0.3em] uppercase">Winner</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={openNaver}
            className="btn-amber inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base"
          >
            <MapPin className="h-5 w-5" />
            주변 맛집 찾기
          </button>
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold glass text-slate-100 hover:bg-white/10 transition"
          >
            <RotateCcw className="h-5 w-5" />
            다시 하기
          </button>
        </div>
      </div>
    </main>
  );
}