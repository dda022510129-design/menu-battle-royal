import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  getMergedFoods,
  shuffle,
  roundLabel,
  type Food,
  type Category,
  type TournamentSize,
} from "@/lib/foods";
import { StartScreen } from "@/components/food-tournament/StartScreen";
import { MatchScreen } from "@/components/food-tournament/MatchScreen";
import { ResultScreen } from "@/components/food-tournament/ResultScreen";
import { recordWin } from "@/lib/stats";
import type { MatchRecord } from "@/components/food-tournament/BracketView";

export const Route = createFileRoute("/")({
  component: Index,
});

type Phase = "idle" | "playing" | "finished";

export type TournamentConfig = {
  categories: Category[];
  size: TournamentSize;
};

function Index() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [current, setCurrent] = useState<Food[]>([]);
  const [winners, setWinners] = useState<Food[]>([]);
  const [matchIdx, setMatchIdx] = useState(0);
  const [champion, setChampion] = useState<Food | null>(null);
  const [matchRecords, setMatchRecords] = useState<MatchRecord[]>([]);

  const totalMatches = current.length / 2;
  const roundName = useMemo(() => roundLabel(current.length), [current.length]);

  const start = (config: TournamentConfig) => {
    const allFoods = getMergedFoods();
    const pool = allFoods.filter(
      (f) => f.isActive !== false && f.categories.some((c) => config.categories.includes(c)),
    );
    const picked = shuffle(pool).slice(0, config.size);
    setCurrent(picked);
    setWinners([]);
    setMatchIdx(0);
    setChampion(null);
    setMatchRecords([]);
    setPhase("playing");
  };

  const reset = () => {
    setPhase("idle");
    setCurrent([]);
    setWinners([]);
    setMatchIdx(0);
    setChampion(null);
    setMatchRecords([]);
  };

  const handlePick = (winner: Food) => {
    const left = current[matchIdx * 2];
    const right = current[matchIdx * 2 + 1];
    const newRecord: MatchRecord = { roundName, left, right, winner };

    const nextWinners = [...winners, winner];
    const nextMatchIdx = matchIdx + 1;
    const roundDone = nextMatchIdx * 2 >= current.length;
    const nextRecords = [...matchRecords, newRecord];

    if (roundDone) {
      if (nextWinners.length === 1) {
        setChampion(nextWinners[0]);
        setMatchRecords(nextRecords);
        setPhase("finished");
        recordWin(nextWinners[0].id);
        return;
      }
      setCurrent(nextWinners);
      setWinners([]);
      setMatchIdx(0);
      setMatchRecords(nextRecords);
    } else {
      setWinners(nextWinners);
      setMatchIdx(nextMatchIdx);
      setMatchRecords(nextRecords);
    }
  };

  if (phase === "idle") return <StartScreen onStart={start} />;
  if (phase === "finished" && champion)
    return <ResultScreen winner={champion} onReset={reset} matchRecords={matchRecords} />;

  const left = current[matchIdx * 2];
  const right = current[matchIdx * 2 + 1];
  if (!left || !right) return <StartScreen onStart={start} />;

  return (
    <MatchScreen
      left={left}
      right={right}
      roundName={roundName}
      matchNumber={matchIdx + 1}
      totalMatches={totalMatches}
      onPick={handlePick}
    />
  );
}
