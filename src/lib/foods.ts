export type Category = "한식" | "중식" | "일식" | "양식" | "분식" | "디저트" | "건강식/채식";

export type Food = {
  id: string;
  name: string;
  emoji: string;
  gradient: string; // tailwind gradient classes
  image: string; // Unsplash image URL
  categories: Category[];
  isCustom?: boolean;
  isActive?: boolean; // undefined = active by default
};

export const ALL_CATEGORIES: Category[] = [
  "한식",
  "중식",
  "일식",
  "양식",
  "분식",
  "디저트",
  "건강식/채식",
];

export const TOURNAMENT_SIZES = [8, 16, 32, 64, 128] as const;
export type TournamentSize = (typeof TOURNAMENT_SIZES)[number];

export const BASE_FOODS: Food[] = [
  // 한식
  {
    id: "chicken",
    name: "치킨",
    emoji: "🍗",
    gradient: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "samgyeopsal",
    name: "삼겹살",
    emoji: "🥓",
    gradient: "from-rose-400 to-pink-600",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "gukbap",
    name: "국밥",
    emoji: "🍚",
    gradient: "from-orange-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "kimchijjigae",
    name: "김치찌개",
    emoji: "🍲",
    gradient: "from-red-500 to-orange-700",
    image: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "gopchang",
    name: "곱창",
    emoji: "🔥",
    gradient: "from-orange-500 to-red-700",
    image: "https://images.unsplash.com/photo-1544025162-d76538780de5?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "galbi",
    name: "갈비",
    emoji: "🍖",
    gradient: "from-red-400 to-rose-700",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "bossam",
    name: "보쌈",
    emoji: "🌿",
    gradient: "from-emerald-400 to-green-700",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "doenjang",
    name: "된장찌개",
    emoji: "🪴",
    gradient: "from-amber-600 to-yellow-800",
    image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "bibimbap",
    name: "비빔밥",
    emoji: "🥗",
    gradient: "from-red-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "haemultang",
    name: "해물탕",
    emoji: "🦞",
    gradient: "from-red-500 to-rose-800",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "sulungtang",
    name: "설렁탕",
    emoji: "🍛",
    gradient: "from-slate-200 to-stone-400",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "dakgalbi",
    name: "닭갈비",
    emoji: "🍗",
    gradient: "from-orange-400 to-red-600",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "yukgaejang",
    name: "육개장",
    emoji: "🌶️",
    gradient: "from-red-600 to-orange-800",
    image: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "jokbal",
    name: "족발",
    emoji: "🐷",
    gradient: "from-pink-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "sundae",
    name: "순대국",
    emoji: "🍢",
    gradient: "from-stone-400 to-neutral-600",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "kimchi_fried_rice",
    name: "김치볶음밥",
    emoji: "🍳",
    gradient: "from-red-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "jjimdak",
    name: "찜닭",
    emoji: "🫕",
    gradient: "from-amber-500 to-brown-700",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
    categories: ["한식"],
  },
  {
    id: "gamjatang",
    name: "감자탕",
    emoji: "🥘",
    gradient: "from-orange-500 to-red-700",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80",
    categories: ["한식"],
  },

  // 중식
  {
    id: "jjajang",
    name: "짜장면",
    emoji: "🥢",
    gradient: "from-stone-500 to-neutral-800",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "malatang",
    name: "마라탕",
    emoji: "🍜",
    gradient: "from-red-600 to-rose-900",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "jjamppong",
    name: "짬뽕",
    emoji: "🦐",
    gradient: "from-red-500 to-orange-700",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "tangsuyuk",
    name: "탕수육",
    emoji: "🍖",
    gradient: "from-amber-400 to-red-500",
    image: "https://images.unsplash.com/photo-1609167830220-7164aa360951?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "kungpao_chicken",
    name: "쿵파오 치킨",
    emoji: "🌶️",
    gradient: "from-red-500 to-amber-700",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "peking_duck",
    name: "베이징 덕",
    emoji: "🦆",
    gradient: "from-amber-500 to-orange-700",
    image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "dim_sum",
    name: "딤섬",
    emoji: "🫕",
    gradient: "from-yellow-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "mapo_tofu",
    name: "마파두부",
    emoji: "🌶️",
    gradient: "from-red-500 to-rose-800",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "fried_rice_chinese",
    name: "중화볶음밥",
    emoji: "🍚",
    gradient: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80",
    categories: ["중식"],
  },
  {
    id: "noodles_chinese",
    name: "중화면",
    emoji: "🍜",
    gradient: "from-amber-400 to-yellow-600",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["중식"],
  },

  // 일식
  {
    id: "sushi",
    name: "초밥",
    emoji: "🍣",
    gradient: "from-rose-300 to-orange-400",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "ramen",
    name: "라멘",
    emoji: "🍥",
    gradient: "from-orange-400 to-red-500",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "donkatsu",
    name: "돈까스",
    emoji: "🍱",
    gradient: "from-amber-300 to-yellow-600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "tonkatsu",
    name: "카츠동",
    emoji: "🥚",
    gradient: "from-yellow-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1614441335095-4e6b8b4bb46e?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "udon",
    name: "우동",
    emoji: "🍜",
    gradient: "from-amber-200 to-yellow-500",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "tempura",
    name: "튀김(텐푸라)",
    emoji: "🍤",
    gradient: "from-yellow-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "okonomiyaki",
    name: "오코노미야키",
    emoji: "🥞",
    gradient: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "yakiniku",
    name: "야키니쿠",
    emoji: "🥩",
    gradient: "from-red-400 to-rose-700",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "gyoza",
    name: "교자(만두)",
    emoji: "🥟",
    gradient: "from-slate-300 to-stone-500",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "takoyaki",
    name: "타코야키",
    emoji: "🐙",
    gradient: "from-orange-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7e?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "sashimi",
    name: "사시미",
    emoji: "🐟",
    gradient: "from-sky-300 to-blue-500",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80",
    categories: ["일식"],
  },
  {
    id: "onigiri",
    name: "오니기리",
    emoji: "🍙",
    gradient: "from-stone-200 to-slate-400",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
    categories: ["일식"],
  },

  // 양식
  {
    id: "pizza",
    name: "피자",
    emoji: "🍕",
    gradient: "from-red-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "burger",
    name: "햄버거",
    emoji: "🍔",
    gradient: "from-yellow-500 to-amber-700",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "steak",
    name: "스테이크",
    emoji: "🥩",
    gradient: "from-rose-500 to-red-900",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "taco",
    name: "타코",
    emoji: "🌮",
    gradient: "from-lime-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "pasta",
    name: "파스타",
    emoji: "🍝",
    gradient: "from-yellow-400 to-red-500",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "risotto",
    name: "리조또",
    emoji: "🍚",
    gradient: "from-yellow-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "sandwich",
    name: "샌드위치",
    emoji: "🥪",
    gradient: "from-amber-300 to-lime-500",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "fish_and_chips",
    name: "피쉬 앤 칩스",
    emoji: "🐟",
    gradient: "from-yellow-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "hotdog",
    name: "핫도그",
    emoji: "🌭",
    gradient: "from-red-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1612392061787-2a8bf6b20b13?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "burritos",
    name: "부리또",
    emoji: "🌯",
    gradient: "from-lime-400 to-green-700",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "clam_chowder",
    name: "클램차우더",
    emoji: "🍵",
    gradient: "from-slate-200 to-stone-400",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    categories: ["양식"],
  },
  {
    id: "wings",
    name: "윙",
    emoji: "🍗",
    gradient: "from-orange-400 to-red-600",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80",
    categories: ["양식"],
  },

  // 분식
  {
    id: "tteokbokki",
    name: "떡볶이",
    emoji: "🌶️",
    gradient: "from-red-500 to-rose-700",
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "kimbap",
    name: "김밥",
    emoji: "🍙",
    gradient: "from-green-400 to-emerald-700",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "ramyeon",
    name: "라면",
    emoji: "🍜",
    gradient: "from-red-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "mandu",
    name: "만두",
    emoji: "🥟",
    gradient: "from-stone-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "twigim",
    name: "튀김",
    emoji: "🍢",
    gradient: "from-amber-300 to-yellow-600",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "순대_분식",
    name: "순대",
    emoji: "🫕",
    gradient: "from-stone-400 to-neutral-700",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "odeng",
    name: "어묵(오뎅)",
    emoji: "🍢",
    gradient: "from-amber-300 to-orange-500",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    categories: ["분식"],
  },
  {
    id: "hotteok",
    name: "호떡",
    emoji: "🥞",
    gradient: "from-amber-400 to-brown-600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categories: ["분식", "디저트"],
  },
  {
    id: "bungeoppang",
    name: "붕어빵",
    emoji: "🐟",
    gradient: "from-yellow-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categories: ["분식", "디저트"],
  },
  {
    id: "eomuk_tang",
    name: "어묵탕",
    emoji: "🍲",
    gradient: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?w=800&q=80",
    categories: ["분식"],
  },

  // 디저트
  {
    id: "bingsu",
    name: "빙수",
    emoji: "🍧",
    gradient: "from-sky-300 to-blue-500",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "cake",
    name: "케이크",
    emoji: "🎂",
    gradient: "from-pink-300 to-rose-500",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "ice_cream",
    name: "아이스크림",
    emoji: "🍦",
    gradient: "from-yellow-200 to-pink-400",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "macaron",
    name: "마카롱",
    emoji: "🍬",
    gradient: "from-pink-300 to-purple-400",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "tiramisu",
    name: "티라미수",
    emoji: "☕",
    gradient: "from-amber-700 to-stone-900",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "churro",
    name: "추로스",
    emoji: "🥐",
    gradient: "from-amber-400 to-yellow-600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "waffle",
    name: "와플",
    emoji: "🧇",
    gradient: "from-yellow-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "donut",
    name: "도넛",
    emoji: "🍩",
    gradient: "from-pink-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "croissant",
    name: "크루아상",
    emoji: "🥐",
    gradient: "from-amber-300 to-yellow-600",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    categories: ["디저트"],
  },
  {
    id: "tteok",
    name: "떡(한과)",
    emoji: "🍡",
    gradient: "from-pink-200 to-rose-400",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    categories: ["디저트", "한식"],
  },

  // 건강식/채식
  {
    id: "salad",
    name: "샐러드",
    emoji: "🥗",
    gradient: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "smoothie_bowl",
    name: "스무디볼",
    emoji: "🫐",
    gradient: "from-purple-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "avocado_toast",
    name: "아보카도 토스트",
    emoji: "🥑",
    gradient: "from-lime-400 to-green-600",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "grain_bowl",
    name: "그레인볼",
    emoji: "🌾",
    gradient: "from-amber-300 to-lime-500",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "hummus",
    name: "후무스",
    emoji: "🫙",
    gradient: "from-yellow-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "veggie_wrap",
    name: "채소 랩",
    emoji: "🌯",
    gradient: "from-green-400 to-lime-600",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "tofu_bowl",
    name: "두부 덮밥",
    emoji: "🍲",
    gradient: "from-slate-200 to-stone-400",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80",
    categories: ["건강식/채식", "한식"],
  },
  {
    id: "buddha_bowl",
    name: "부다볼",
    emoji: "🥙",
    gradient: "from-lime-400 to-green-700",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    categories: ["건강식/채식"],
  },
  {
    id: "mushroom_pasta",
    name: "버섯 파스타",
    emoji: "🍄",
    gradient: "from-stone-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    categories: ["건강식/채식", "양식"],
  },
  {
    id: "vegetable_curry",
    name: "채소 카레",
    emoji: "🍛",
    gradient: "from-yellow-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    categories: ["건강식/채식"],
  },
];

// ─── Custom food LocalStorage helpers ─────────────────────────────────────────

const CUSTOM_FOODS_KEY = "menu-battle-royal-custom-foods";
const DISABLED_IDS_KEY = "menu-battle-royal-disabled-ids";

export function getCustomFoods(): Food[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CUSTOM_FOODS_KEY);
    return raw ? (JSON.parse(raw) as Food[]) : [];
  } catch {
    return [];
  }
}

export function saveCustomFood(food: Food): void {
  if (typeof window === "undefined") return;
  const existing = getCustomFoods();
  const updated = existing.filter((f) => f.id !== food.id);
  updated.push({ ...food, isCustom: true });
  try {
    localStorage.setItem(CUSTOM_FOODS_KEY, JSON.stringify(updated));
  } catch {}
}

export function deleteCustomFood(id: string): void {
  if (typeof window === "undefined") return;
  const updated = getCustomFoods().filter((f) => f.id !== id);
  try {
    localStorage.setItem(CUSTOM_FOODS_KEY, JSON.stringify(updated));
  } catch {}
}

export function getDisabledIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(DISABLED_IDS_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

export function toggleFoodActive(id: string): void {
  if (typeof window === "undefined") return;
  const disabled = getDisabledIds();
  if (disabled.has(id)) {
    disabled.delete(id);
  } else {
    disabled.add(id);
  }
  try {
    localStorage.setItem(DISABLED_IDS_KEY, JSON.stringify([...disabled]));
  } catch {}
}

export function getMergedFoods(): Food[] {
  const custom = getCustomFoods();
  const disabled = getDisabledIds();
  return [...BASE_FOODS, ...custom].map((f) => ({
    ...f,
    isActive: !disabled.has(f.id),
  }));
}

// ─── Legacy export alias ───────────────────────────────────────────────────────
export const FOODS = BASE_FOODS;

// ─── Utility functions ─────────────────────────────────────────────────────────

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function roundLabel(size: number): string {
  if (size >= 128) return "128강";
  if (size >= 64) return "64강";
  if (size >= 32) return "32강";
  if (size >= 16) return "16강";
  if (size >= 8) return "8강";
  if (size >= 4) return "4강";
  return "결승전";
}
