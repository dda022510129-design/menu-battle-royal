# 오늘 뭐 먹지? 음식 월드컵 토너먼트

100% 클라이언트 사이드 React SPA로 구현. 백엔드 없음, 로컬 상태만 사용.

## 구현 범위

### 1. 디자인 시스템 (`src/styles.css`)

- 다크 모드 기본값으로 설정 (`<html class="dark">` 또는 루트에 dark 적용)
- Slate-900 배경 토큰, amber/orange 그라디언트 토큰 추가
- 글래스모피즘용 세미 토큰 (`--glass-bg`, `--glass-border`, `--shadow-glow`)
- 크라운/우승 카드용 골드 글로우 토큰
- 커스텀 애니메이션: `pulse-glow`, `vs-float`, `card-select`, `celebrate`

### 2. 데이터 (`src/lib/foods.ts`)

16개 메뉴 정적 배열:
치킨 🍗, 피자 🍕, 삼겹살 🥓, 짜장면 🥢, 초밥 🍣, 떡볶이 🌶️, 햄버거 🍔, 돈까스 🍱, 국밥 🍚, 마라탕 🍜, 라멘 🍜, 파스타 🍝, 김치찌개 🍲, 곱창 🔥, 스테이크 🥩, 타코 🌮

### 3. 게임 로직 (`src/lib/tournament.ts`)

- `shuffle<T>(arr)` – Fisher-Yates
- 라운드 라벨 계산: 16→"16강", 8→"8강", 4→"4강", 2→"결승전"
- 상태 흐름: `idle` → `playing` → `finished`

### 4. 라우트 및 컴포넌트

- `src/routes/__root.tsx`: 메타데이터를 "오늘 뭐 먹지? - 음식 월드컵"으로 교체, body에 dark 클래스, 폰트 링크
- `src/routes/index.tsx`: 게임 컨테이너 (상태 머신)
- `src/components/StartScreen.tsx`: 커버 히어로 + "16강 시작하기" 버튼
- `src/components/MatchScreen.tsx`: 좌/우 카드 + 중앙 VS 배지 + 상단 진행 표시줄
- `src/components/FoodCard.tsx`: 이모지 뱃지 + 이름, 호버/선택 애니메이션
- `src/components/ProgressBar.tsx`: 라운드명 + "Match X / Y" + 세그먼트 바
- `src/components/ResultScreen.tsx`: 골드 글로우 우승 카드 + 크라운, 두 액션 버튼

### 5. 게임 플로우 로직 (index.tsx 내)

```
state: {
  phase: 'idle' | 'playing' | 'finished',
  currentRound: Food[],  // 이번 라운드 참가자
  winners: Food[],       // 다음 라운드 진출자
  matchIndex: number,    // 현재 라운드 내 매치 인덱스 (pair index)
  champion: Food | null
}
```

- 시작: 16개 셔플 → `currentRound`에 저장, `matchIndex=0`
- 선택 시: 승자를 `winners`에 push, `matchIndex++`
- 라운드 종료 시 (`matchIndex*2 >= currentRound.length`):
  - winners.length === 1 → champion 설정, phase='finished'
  - 아니면 `currentRound = winners`, `winners = []`, `matchIndex = 0`
- 카드 선택 시 짧은 애니메이션 딜레이(~450ms) 후 진행

### 6. 결과 화면 액션

- "주변 맛집 찾기": `window.open('https://map.naver.com/p/search/' + encodeURIComponent(name + ' 맛집'), '_blank')`
- "다시 하기": 상태 초기화 + 재셔플

### 7. 다크 모드 강제

- `__root.tsx`의 `<html>`에 `className="dark"` 하드코딩
- 배경/텍스트 슬레이트 톤 확정

## 검증

- 빌드가 첫 시도에 통과하도록 모든 파일 함께 생성
- 16 → 8 → 4 → 2 → 1 라운드 진행 확인 (총 15 매치)
- 파일 다 만든 후 라우트 트리 자동 재생성 확인
