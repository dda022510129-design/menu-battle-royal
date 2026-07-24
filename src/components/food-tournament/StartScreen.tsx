import { Sparkles, Trophy, UtensilsCrossed, Settings, Plus, Trash2, X } from "lucide-react";
import { useEffect, useState, useMemo, useId } from "react";
import {
  ALL_CATEGORIES,
  TOURNAMENT_SIZES,
  getMergedFoods,
  saveCustomFood,
  deleteCustomFood,
  toggleFoodActive,
  type Food,
  type Category,
  type TournamentSize,
} from "@/lib/foods";
import { getStats as getStatsFromLib, clearStats as clearStatsFromLib } from "@/lib/stats";
import type { TournamentConfig } from "@/routes/index";

const CATEGORY_COLORS: Record<Category, string> = {
  한식: "from-red-500 to-orange-600",
  중식: "from-red-700 to-rose-900",
  일식: "from-sky-500 to-blue-700",
  양식: "from-amber-500 to-yellow-700",
  분식: "from-pink-500 to-rose-600",
  디저트: "from-purple-500 to-pink-600",
  "건강식/채식": "from-green-500 to-emerald-700",
};

const CATEGORY_EMOJIS: Record<Category, string> = {
  한식: "🍚",
  중식: "🥢",
  일식: "🍣",
  양식: "🍕",
  분식: "🌶️",
  디저트: "🍰",
  "건강식/채식": "🥗",
};

export function StartScreen({ onStart }: { onStart: (config: TournamentConfig) => void }) {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    "한식",
    "중식",
    "일식",
    "양식",
    "분식",
  ]);
  const [tournamentSize, setTournamentSize] = useState<TournamentSize>(16);
  const [showEditor, setShowEditor] = useState(false);
  const [allFoods, setAllFoods] = useState<Food[]>([]);
  const [stats, setStats] = useState<ReturnType<typeof getStatsFromLib> | null>(null);

  // Custom food form state
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodEmoji, setNewFoodEmoji] = useState("🍽️");
  const [newFoodCategory, setNewFoodCategory] = useState<Category>("한식");
  const [newFoodImage, setNewFoodImage] = useState("");
  const [formError, setFormError] = useState("");
  const uid = useId();

  const refreshFoods = () => setAllFoods(getMergedFoods());

  useEffect(() => {
    refreshFoods();
    setStats(getStatsFromLib());
  }, []);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.length > 1
          ? prev.filter((c) => c !== cat)
          : prev
        : [...prev, cat],
    );
  };

  const availableCount = useMemo(() => {
    return allFoods.filter(
      (f) => f.isActive !== false && f.categories.some((c) => selectedCategories.includes(c)),
    ).length;
  }, [allFoods, selectedCategories]);

  const topFoods = useMemo(() => {
    if (!stats || Object.keys(stats.wins).length === 0) return [];
    return Object.entries(stats.wins)
      .map(([id, count]) => {
        const food = allFoods.find((f) => f.id === id);
        return food ? { ...food, count } : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  }, [stats, allFoods]);

  const handleAddFood = () => {
    if (!newFoodName.trim()) {
      setFormError("음식 이름을 입력해주세요.");
      return;
    }
    const newFood: Food = {
      id: `custom-${Date.now()}`,
      name: newFoodName.trim(),
      emoji: newFoodEmoji || "🍽️",
      gradient: "from-violet-500 to-purple-700",
      image: newFoodImage.trim(),
      categories: [newFoodCategory],
      isCustom: true,
    };
    saveCustomFood(newFood);
    setNewFoodName("");
    setNewFoodEmoji("🍽️");
    setNewFoodImage("");
    setFormError("");
    refreshFoods();
  };

  const handleDeleteCustomFood = (id: string) => {
    deleteCustomFood(id);
    refreshFoods();
  };

  const handleToggleActive = (id: string) => {
    toggleFoodActive(id);
    refreshFoods();
  };

  const canStart = availableCount >= tournamentSize;

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center animate-card-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-amber-200/90 mb-8">
          <Sparkles className="h-3.5 w-3.5" /> Food World Cup · 2026
        </div>

        {/* Title */}
        <h1
          className="text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient-amber">오늘 뭐 먹지?</span>
        </h1>

        <p className="text-slate-300/90 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
          매번 반복되는 메뉴 고민, 오늘은{" "}
          <span className="text-amber-300 font-semibold">토너먼트</span>로 가볍고 즐겁게 결정해요.
        </p>

        {/* ── Category Selector ──────────────────────────────── */}
        <div className="glass rounded-3xl p-6 mb-6 text-left">
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">
            🍽️ 음식 카테고리 선택 (중복 선택 가능)
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => {
              const active = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={[
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border cursor-pointer",
                    active
                      ? `bg-gradient-to-r ${CATEGORY_COLORS[cat]} border-transparent text-white shadow-lg scale-105`
                      : "glass border-white/10 text-slate-400 hover:border-white/30 hover:text-slate-200",
                  ].join(" ")}
                >
                  <span>{CATEGORY_EMOJIS[cat]}</span>
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            현재 선택 가능한 음식:{" "}
            <span className="text-amber-300 font-bold">{availableCount}개</span>
          </p>
        </div>

        {/* ── Tournament Size Selector ───────────────────────── */}
        <div className="glass rounded-3xl p-6 mb-6 text-left">
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">
            🏆 토너먼트 규모 선택
          </p>
          <div className="flex flex-wrap gap-2">
            {TOURNAMENT_SIZES.map((size) => {
              const enough = availableCount >= size;
              const selected = tournamentSize === size;
              return (
                <button
                  key={size}
                  disabled={!enough}
                  onClick={() => setTournamentSize(size)}
                  className={[
                    "rounded-2xl px-5 py-3 text-base font-bold transition-all duration-300 border cursor-pointer disabled:cursor-not-allowed",
                    selected && enough
                      ? "bg-gradient-to-r from-amber-400 to-orange-600 border-transparent text-slate-950 shadow-lg scale-105"
                      : enough
                        ? "glass border-white/10 text-slate-300 hover:border-amber-400/50 hover:text-amber-300"
                        : "opacity-30 glass border-white/5 text-slate-600",
                  ].join(" ")}
                  title={!enough ? `음식이 ${size}개 이상 필요합니다.` : ""}
                >
                  {size}강
                </button>
              );
            })}
          </div>
          {!canStart && (
            <p className="mt-3 text-xs text-red-400">
              ⚠️ 선택한 카테고리에 음식이 부족합니다. 카테고리를 더 추가하거나 강수를 낮춰주세요.
            </p>
          )}
        </div>

        {/* ── Start Button ───────────────────────────────────── */}
        <button
          onClick={() => onStart({ categories: selectedCategories, size: tournamentSize })}
          disabled={!canStart}
          className="btn-amber inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-xl md:text-2xl animate-pulse-glow disabled:opacity-40 disabled:cursor-not-allowed disabled:animate-none cursor-pointer mb-8"
        >
          <Trophy className="h-6 w-6" />
          {tournamentSize}강 시작하기
        </button>

        {/* Feature chips */}
        <div className="mt-4 grid grid-cols-3 gap-3 max-w-md mx-auto text-slate-400 text-xs mb-8">
          <FeatureChip
            icon={<UtensilsCrossed className="h-4 w-4" />}
            label={`${availableCount}개 메뉴`}
          />
          <FeatureChip icon={<Sparkles className="h-4 w-4" />} label="랜덤 대진" />
          <FeatureChip icon={<Trophy className="h-4 w-4" />} label="1위 결정" />
        </div>

        {/* ── Custom Food Editor Toggle ─────────────────────── */}
        <button
          onClick={() => setShowEditor((v) => !v)}
          className="inline-flex items-center gap-2 glass rounded-2xl px-5 py-3 text-sm text-slate-300 hover:text-amber-300 hover:bg-white/10 transition cursor-pointer mb-8"
        >
          <Settings className="h-4 w-4" />
          나만의 음식 편집
          {showEditor ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </button>

        {/* ── Custom Food Editor Panel ──────────────────────── */}
        {showEditor && (
          <div className="glass rounded-3xl p-6 mb-8 text-left animate-card-in">
            <h3 className="text-amber-200 font-bold text-lg mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5" /> 음식 목록 관리
            </h3>

            {/* Add new food form */}
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-xs mb-3 uppercase tracking-[0.15em]">
                ✨ 새 음식 추가
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label htmlFor={`${uid}-name`} className="block text-xs text-slate-400 mb-1">
                    음식 이름 *
                  </label>
                  <input
                    id={`${uid}-name`}
                    value={newFoodName}
                    onChange={(e) => setNewFoodName(e.target.value)}
                    placeholder="예: 쌀국수"
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60"
                  />
                </div>
                <div>
                  <label htmlFor={`${uid}-emoji`} className="block text-xs text-slate-400 mb-1">
                    이모지
                  </label>
                  <input
                    id={`${uid}-emoji`}
                    value={newFoodEmoji}
                    onChange={(e) => setNewFoodEmoji(e.target.value)}
                    placeholder="🍽️"
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label htmlFor={`${uid}-cat`} className="block text-xs text-slate-400 mb-1">
                    카테고리
                  </label>
                  <select
                    id={`${uid}-cat`}
                    value={newFoodCategory}
                    onChange={(e) => setNewFoodCategory(e.target.value as Category)}
                    className="w-full rounded-xl bg-slate-800 border border-white/10 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-400/60 cursor-pointer"
                  >
                    {ALL_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {CATEGORY_EMOJIS[c]} {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`${uid}-img`} className="block text-xs text-slate-400 mb-1">
                    이미지 URL (선택)
                  </label>
                  <input
                    id={`${uid}-img`}
                    value={newFoodImage}
                    onChange={(e) => setNewFoodImage(e.target.value)}
                    placeholder="https://..."
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60"
                  />
                </div>
              </div>
              {formError && <p className="text-red-400 text-xs mb-2">{formError}</p>}
              <button
                onClick={handleAddFood}
                className="btn-amber inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm cursor-pointer"
              >
                <Plus className="h-4 w-4" /> 추가하기
              </button>
            </div>

            {/* Food list */}
            <div className="max-h-72 overflow-y-auto pr-1 space-y-2">
              {allFoods.map((food) => (
                <div
                  key={food.id}
                  className={[
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors",
                    food.isActive !== false
                      ? "bg-white/5 border-white/10"
                      : "bg-white/2 border-white/5 opacity-50",
                  ].join(" ")}
                >
                  {/* Thumbnail */}
                  {food.image ? (
                    <img
                      src={food.image}
                      alt={food.name}
                      className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="text-xl flex-shrink-0">{food.emoji}</span>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="text-slate-200 text-sm font-medium truncate">{food.name}</p>
                    <p className="text-slate-500 text-xs">
                      {food.categories.join(", ")}
                      {food.isCustom && <span className="ml-1 text-violet-400">(커스텀)</span>}
                    </p>
                  </div>

                  {/* Toggle active */}
                  <button
                    onClick={() => handleToggleActive(food.id)}
                    title={food.isActive !== false ? "비활성화" : "활성화"}
                    className={[
                      "h-6 w-6 rounded-full border text-xs flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors",
                      food.isActive !== false
                        ? "border-green-400/50 text-green-400 hover:bg-green-400/10"
                        : "border-slate-600 text-slate-600 hover:bg-white/5",
                    ].join(" ")}
                  >
                    {food.isActive !== false ? "✓" : "○"}
                  </button>

                  {/* Delete (custom only) */}
                  {food.isCustom && (
                    <button
                      onClick={() => handleDeleteCustomFood(food.id)}
                      className="h-6 w-6 rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10 flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors"
                      title="삭제"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Stats ─────────────────────────────────────────── */}
        {stats && stats.totalPlays > 0 && topFoods.length > 0 && (
          <div className="mt-4 glass rounded-3xl p-6 md:p-8 max-w-md mx-auto text-left relative overflow-hidden animate-card-in">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5 pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-400" /> 나의 최애 메뉴 TOP 3
                </h3>
                <p className="text-slate-400 text-xs mt-0.5">
                  총 {stats.totalPlays}회의 토너먼트 완료
                </p>
              </div>

              <button
                onClick={() => {
                  if (confirm("모든 통계 기록을 초기화하시겠습니까?")) {
                    clearStatsFromLib();
                    setStats({ totalPlays: 0, wins: {} });
                  }
                }}
                className="text-xs text-slate-500 hover:text-red-400 transition-colors px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer"
              >
                초기화
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {topFoods.map((food, index) => {
                const rankColors = [
                  "from-amber-400 to-yellow-300 text-slate-950",
                  "from-slate-300 to-slate-100 text-slate-900",
                  "from-amber-700 to-amber-600 text-white",
                ];

                const percentage = Math.round((food.count / stats.totalPlays) * 100);

                return (
                  <div key={food.id} className="flex items-center gap-3">
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs bg-gradient-to-br ${rankColors[index] || "from-slate-600 to-slate-500 text-white"}`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-slate-200 font-semibold text-sm flex items-center gap-1.5">
                          <span>{food.emoji}</span>
                          <span>{food.name}</span>
                        </span>
                        <span className="text-slate-400 text-xs font-medium">
                          {food.count}회 우승 ({percentage}%)
                        </span>
                      </div>

                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${food.gradient}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
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
