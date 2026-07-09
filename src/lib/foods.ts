export type Food = {
  id: string;
  name: string;
  emoji: string;
  gradient: string; // tailwind gradient classes
};

export const FOODS: Food[] = [
  { id: "chicken", name: "치킨", emoji: "🍗", gradient: "from-amber-400 to-orange-600" },
  { id: "pizza", name: "피자", emoji: "🍕", gradient: "from-red-400 to-yellow-500" },
  { id: "samgyeopsal", name: "삼겹살", emoji: "🥓", gradient: "from-rose-400 to-pink-600" },
  { id: "jjajang", name: "짜장면", emoji: "🥢", gradient: "from-stone-500 to-neutral-800" },
  { id: "sushi", name: "초밥", emoji: "🍣", gradient: "from-rose-300 to-orange-400" },
  { id: "tteokbokki", name: "떡볶이", emoji: "🌶️", gradient: "from-red-500 to-rose-700" },
  { id: "burger", name: "햄버거", emoji: "🍔", gradient: "from-yellow-500 to-amber-700" },
  { id: "donkatsu", name: "돈까스", emoji: "🍱", gradient: "from-amber-300 to-yellow-600" },
  { id: "gukbap", name: "국밥", emoji: "🍚", gradient: "from-orange-300 to-amber-500" },
  { id: "malatang", name: "마라탕", emoji: "🍜", gradient: "from-red-600 to-rose-900" },
  { id: "ramen", name: "라멘", emoji: "🍥", gradient: "from-orange-400 to-red-500" },
  { id: "pasta", name: "파스타", emoji: "🍝", gradient: "from-yellow-400 to-red-500" },
  { id: "kimchijjigae", name: "김치찌개", emoji: "🍲", gradient: "from-red-500 to-orange-700" },
  { id: "gopchang", name: "곱창", emoji: "🔥", gradient: "from-orange-500 to-red-700" },
  { id: "steak", name: "스테이크", emoji: "🥩", gradient: "from-rose-500 to-red-900" },
  { id: "taco", name: "타코", emoji: "🌮", gradient: "from-lime-400 to-amber-500" },
];

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function roundLabel(size: number): string {
  if (size >= 16) return "16강";
  if (size >= 8) return "8강";
  if (size >= 4) return "4강";
  return "결승전";
}