import type { Food } from "@/lib/foods";

export type MatchRecord = {
  roundName: string;
  left: Food;
  right: Food;
  winner: Food;
};

type RoundGroup = {
  roundName: string;
  matches: MatchRecord[];
};

function groupByRound(records: MatchRecord[]): RoundGroup[] {
  const map = new Map<string, MatchRecord[]>();
  const order: string[] = [];
  for (const r of records) {
    if (!map.has(r.roundName)) {
      map.set(r.roundName, []);
      order.push(r.roundName);
    }
    map.get(r.roundName)!.push(r);
  }
  return order.map((name) => ({ roundName: name, matches: map.get(name)! }));
}

export function BracketView({ records }: { records: MatchRecord[] }) {
  if (records.length === 0) return null;

  const rounds = groupByRound(records);

  return (
    <section className="w-full mt-12">
      <h2
        className="text-center text-2xl md:text-3xl mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span className="text-gradient-amber">🏆 대진표</span>
      </h2>

      {/* Scrollable horizontal container */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max px-4" style={{ alignItems: "flex-start" }}>
          {rounds.map((round, ri) => (
            <div key={round.roundName} className="flex flex-col gap-3">
              {/* Round header */}
              <div className="text-center mb-2">
                <span className="glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
                  {round.roundName}
                </span>
              </div>

              {/* Match cards */}
              <div className="flex flex-col gap-6">
                {round.matches.map((match, mi) => (
                  <MatchCard
                    key={`${ri}-${mi}`}
                    match={match}
                    isLastRound={ri === rounds.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchCard({ match, isLastRound }: { match: MatchRecord; isLastRound: boolean }) {
  return (
    <div className="glass rounded-2xl overflow-hidden w-44 md:w-52 border border-white/10">
      <FoodRow food={match.left} isWinner={match.winner.id === match.left.id} />
      <div className="border-t border-white/10" />
      <FoodRow food={match.right} isWinner={match.winner.id === match.right.id} />
      {isLastRound && (
        <div className="border-t border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-center">
          <span className="text-amber-300 text-xs font-semibold tracking-wide">🏆 우승</span>
        </div>
      )}
    </div>
  );
}

function FoodRow({ food, isWinner }: { food: Food; isWinner: boolean }) {
  return (
    <div
      className={[
        "flex items-center gap-2 px-3 py-2.5 transition-colors",
        isWinner ? "bg-amber-500/20 text-amber-200" : "text-slate-400 opacity-50",
      ].join(" ")}
    >
      {/* Tiny food image or emoji */}
      {food.image ? (
        <img
          src={food.image}
          alt={food.name}
          className="h-7 w-7 rounded-full object-cover flex-shrink-0"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <span className="text-lg leading-none flex-shrink-0">{food.emoji}</span>
      )}
      <span className="text-sm font-medium truncate">{food.name}</span>
      {isWinner && <span className="ml-auto text-amber-400 text-xs flex-shrink-0">✓</span>}
    </div>
  );
}
