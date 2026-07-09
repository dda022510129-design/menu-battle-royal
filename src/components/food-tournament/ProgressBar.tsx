export function ProgressBar({
  roundName,
  matchNumber,
  totalMatches,
}: {
  roundName: string;
  matchNumber: number;
  totalMatches: number;
}) {
  const pct = (matchNumber - 1) / totalMatches;
  return (
    <div className="glass rounded-2xl px-5 py-4 flex flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-amber-400/15 text-amber-300 px-3 py-1 text-xs font-bold tracking-wider">
            {roundName}
          </span>
          <span className="text-slate-400">현재 라운드</span>
        </div>
        <div className="text-slate-300 tabular-nums font-semibold">
          Match <span className="text-amber-300">{matchNumber}</span>
          <span className="text-slate-500"> / {totalMatches}</span>
        </div>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${totalMatches}, minmax(0, 1fr))` }}>
        {Array.from({ length: totalMatches }).map((_, i) => (
          <div
            key={i}
            className={
              "h-1.5 rounded-full transition-all duration-500 " +
              (i < matchNumber - 1
                ? "bg-gradient-to-r from-amber-400 to-orange-500"
                : i === matchNumber - 1
                ? "bg-amber-300/70"
                : "bg-white/8")
            }
          />
        ))}
      </div>
      <div className="sr-only">Progress {Math.round(pct * 100)}%</div>
    </div>
  );
}