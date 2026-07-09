import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FOODS, shuffle, roundLabel, type Food } from "@/lib/foods";
import { StartScreen } from "@/components/food-tournament/StartScreen";
import { MatchScreen } from "@/components/food-tournament/MatchScreen";
import { ResultScreen } from "@/components/food-tournament/ResultScreen";

export const Route = createFileRoute("/")({
  component: Index,
});

type Phase = "idle" | "playing" | "finished";

function Index() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [current, setCurrent] = useState<Food[]>([]);
  const [winners, setWinners] = useState<Food[]>([]);
  const [matchIdx, setMatchIdx] = useState(0); // pair index in current round
  const [champion, setChampion] = useState<Food | null>(null);

  const totalMatches = current.length / 2;
  const roundName = useMemo(() => roundLabel(current.length), [current.length]);

  const start = () => {
    setCurrent(shuffle(FOODS));
    setWinners([]);
    setMatchIdx(0);
    setChampion(null);
    setPhase("playing");
  };

  const reset = () => {
    setPhase("idle");
    setCurrent([]);
    setWinners([]);
    setMatchIdx(0);
    setChampion(null);
  };

  const handlePick = (winner: Food) => {
    const nextWinners = [...winners, winner];
    const nextMatchIdx = matchIdx + 1;
    const roundDone = nextMatchIdx * 2 >= current.length;

    if (roundDone) {
      if (nextWinners.length === 1) {
        setChampion(nextWinners[0]);
        setPhase("finished");
        return;
      }
      setCurrent(nextWinners);
      setWinners([]);
      setMatchIdx(0);
    } else {
      setWinners(nextWinners);
      setMatchIdx(nextMatchIdx);
    }
  };

  if (phase === "idle") return <StartScreen onStart={start} />;
  if (phase === "finished" && champion)
    return <ResultScreen winner={champion} onReset={reset} />;

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
