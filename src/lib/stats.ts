export type Stats = {
  totalPlays: number;
  wins: Record<string, number>;
};

const STATS_KEY = "menu-battle-royal-stats";

export function getStats(): Stats {
  if (typeof window === "undefined") {
    return { totalPlays: 0, wins: {} };
  }
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return { totalPlays: 0, wins: {} };
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse stats", e);
    return { totalPlays: 0, wins: {} };
  }
}

export function recordWin(foodId: string): Stats {
  if (typeof window === "undefined") {
    return { totalPlays: 0, wins: {} };
  }
  const stats = getStats();
  stats.totalPlays += 1;
  stats.wins[foodId] = (stats.wins[foodId] || 0) + 1;
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("Failed to save stats", e);
  }
  return stats;
}

export function clearStats(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STATS_KEY);
  } catch (e) {
    console.error("Failed to clear stats", e);
  }
}
