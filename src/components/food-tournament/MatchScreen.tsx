import { useState } from "react";
import type { Food } from "@/lib/foods";
import { ProgressBar } from "./ProgressBar";

export function MatchScreen({
  left,
  right,
  roundName,
  matchNumber,
  totalMatches,
  onPick,
}: {
  left: Food;
  right: Food;
  roundName: string;
  matchNumber: number;
  totalMatches: number;
  onPick: (winner: Food) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);

  const handlePick = (f: Food) => {
    if (picked) return;
    setPicked(f.id);
    window.setTimeout(() => {
      setPicked(null);
      onPick(f);
    }, 450);
  };

  return (
    <main className="relative min-h-screen px-4 md:px-8 py-6 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <h2
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient-amber">오늘 뭐 먹지?</span>
          </h2>
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">Food World Cup</span>
        </header>

        <ProgressBar roundName={roundName} matchNumber={matchNumber} totalMatches={totalMatches} />

        <div className="relative mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <FoodChoiceCard
              key={`L-${left.id}-${matchNumber}`}
              food={left}
              side="left"
              picked={picked}
              onPick={handlePick}
            />
            <FoodChoiceCard
              key={`R-${right.id}-${matchNumber}`}
              food={right}
              side="right"
              picked={picked}
              onPick={handlePick}
            />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-vs-float z-20"
            aria-hidden
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-500/30 blur-2xl" />
              <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 shadow-2xl border-4 border-slate-950">
                <span
                  className="text-3xl md:text-4xl text-slate-950"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  VS
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-4">
          더 끌리는 메뉴를 클릭하세요 · 승자는 다음 라운드로 진출합니다
        </p>
      </div>
    </main>
  );
}

function FoodChoiceCard({
  food,
  side,
  picked,
  onPick,
}: {
  food: Food;
  side: "left" | "right";
  picked: string | null;
  onPick: (f: Food) => void;
}) {
  const isPicked = picked === food.id;
  const isLoser = picked !== null && !isPicked;

  return (
    <button
      onClick={() => onPick(food)}
      disabled={picked !== null}
      className={[
        "group relative overflow-hidden rounded-3xl min-h-[380px] md:min-h-[520px] p-8 text-left animate-card-in",
        "border border-white/10 transition-all duration-500",
        isPicked
          ? "ring-4 ring-amber-300 scale-[1.02] shadow-[0_30px_80px_-20px_rgba(251,191,36,0.6)]"
          : isLoser
          ? "opacity-30 scale-95 grayscale"
          : "hover:scale-[1.02] hover:-translate-y-1 hover:ring-2 hover:ring-amber-300/60",
        "cursor-pointer disabled:cursor-default",
      ].join(" ")}
      style={{ animationDelay: side === "right" ? "80ms" : "0ms" }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${food.gradient} opacity-90`}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" aria-hidden />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition" aria-hidden />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
          <div className="relative h-40 w-40 md:h-52 md:w-52 rounded-full glass flex items-center justify-center text-8xl md:text-9xl shadow-2xl">
            <span className="drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]">{food.emoji}</span>
          </div>
        </div>

        <div
          className="text-4xl md:text-5xl text-white tracking-tight drop-shadow-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {food.name}
        </div>

        <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/80">
          {side === "left" ? "Choice A" : "Choice B"}
        </div>
      </div>
    </button>
  );
}