export interface ConversationScenario {
  id: string;
  title: string;       // Japanese title
  titleKo: string;     // Korean title
  situation: string;   // Korean situation description
  dialogue: { speaker: string; text: string; translation: string }[]; // text = Japanese, translation = Korean
  keyExpressions: { expression: string; meaning: string; usage: string }[];
  patternDrill: {
    pattern: string;     // Japanese pattern
    patternKo: string;   // Korean meaning
    blanks: { sentence: string; answer: string; hint: string }[]; // sentence/answer in Japanese, hint in Korean
  }[];
}

export const conversations: ConversationScenario[] = [
  {
    id: "convenience-store",
    title: "コンビニで",
    titleKo: "편의점에서",
    situation:
      "일본 편의점에서 도시락과 음료를 사는 상황. 점원과 기본적인 대화를 나누며 결제까지 진행합니다.",
    dialogue: [
      {
        speaker: "Staff",
        text: "いらっしゃいませ。",
        translation: "어서 오세요.",
      },
      {
        speaker: "You",
        text: "すみません、このお弁当ください。",
        translation: "저기요, 이 도시락 주세요.",
      },
      {
        speaker: "Staff",
        text: "お弁当、温めますか？",
        translation: "도시락, 데워 드릴까요?",
      },
      {
        speaker: "You",
        text: "はい、お願いします。あと、お茶もください。",
        translation: "네, 부탁합니다. 그리고 차도 주세요.",
      },
      {
        speaker: "Staff",
        text: "袋いりますか？",
        translation: "봉투 필요하세요?",
      },
      {
        speaker: "You",
        text: "はい、お願いします。",
        translation: "네, 부탁합니다.",
      },
      {
        speaker: "Staff",
        text: "ポイントカードはお持ちですか？お会計は780円になります。",
        translation: "포인트 카드 가지고 계세요? 계산은 780엔입니다.",
      },
      {
        speaker: "You",
        text: "カードはないです。カードで払えますか？",
        translation: "카드는 없어요. 카드로 결제할 수 있나요?",
      },
    ],
    keyExpressions: [
      {
        expression: "〜ください",
        meaning: "~주세요",
        usage: "물건을 요청하거나 주문할 때 사용합니다. 예: お弁当ください (도시락 주세요)",
      },
      {
        expression: "温めますか？",
        meaning: "데워 드릴까요?",
        usage: "편의점에서 도시락이나 음식을 전자레인지로 데울지 물을 때 사용합니다.",
      },
      {
        expression: "袋いりますか？",
        meaning: "봉투 필요하세요?",
        usage: "일본에서는 봉투가 유료이므로 점원이 항상 묻습니다. 필요하면 はい、お願いします라고 답합니다.",
      },
      {
        expression: "お会計は〜円になります",
        meaning: "계산은 ~엔입니다",
        usage: "점원이 합계 금액을 알려줄 때 사용하는 표현입니다.",
      },
    ],
    patternDrill: [
      {
        pattern: "〜ください",
        patternKo: "~주세요 (물건이나 서비스를 요청할 때)",
        blanks: [
          {
            sentence: "この___ください。",
            answer: "おにぎり",
            hint: "주먹밥",
          },
          {
            sentence: "___を二つください。",
            answer: "サンドイッチ",
            hint: "샌드위치",
          },
          {
            sentence: "冷たい___ください。",
            answer: "お水",
            hint: "물",
          },
        ],
      },
      {
        pattern: "〜はお持ちですか？",
        patternKo: "~를 가지고 계세요? (소지 여부를 물을 때)",
        blanks: [
          {
            sentence: "___はお持ちですか？",
            answer: "ポイントカード",
            hint: "포인트 카드",
          },
          {
            sentence: "___はお持ちですか？",
            answer: "エコバッグ",
            hint: "에코백",
          },
          {
            sentence: "___はお持ちですか？",
            answer: "会員証",
            hint: "회원증",
          },
        ],
      },
    ],
  },
  {
    id: "restaurant",
    title: "レストランで",
    titleKo: "식당에서",
    situation:
      "일본 식당에서 입장부터 주문, 식사, 계산까지의 상황. 직원과 자연스럽게 대화하며 식사를 즐깁니다.",
    dialogue: [
      {
        speaker: "Waiter",
        text: "いらっしゃいませ。何名様ですか？",
        translation: "어서 오세요. 몇 분이세요?",
      },
      {
        speaker: "You",
        text: "二人です。",
        translation: "두 명이요.",
      },
      {
        speaker: "Waiter",
        text: "こちらのお席へどうぞ。メニューです。",
        translation: "이쪽 자리로 오세요. 메뉴입니다.",
      },
      {
        speaker: "You",
        text: "すみません、おすすめは何ですか？",
        translation: "저기요, 추천 메뉴는 뭔가요?",
      },
      {
        speaker: "Waiter",
        text: "本日のおすすめは和牛ステーキです。",
        translation: "오늘의 추천은 와규 스테이크입니다.",
      },
      {
        speaker: "You",
        text: "じゃあ、それと生ビールを注文お願いします。",
        translation: "그럼, 그것과 생맥주를 주문할게요.",
      },
      {
        speaker: "Waiter",
        text: "かしこまりました。少々お待ちください。",
        translation: "알겠습니다. 잠시만 기다려 주세요.",
      },
      {
        speaker: "You",
        text: "すみません、お会計お願いします。",
        translation: "저기요, 계산 부탁합니다.",
      },
    ],
    keyExpressions: [
      {
        expression: "何名様ですか？",
        meaning: "몇 분이세요?",
        usage: "식당 입구에서 직원이 인원수를 물을 때 사용합니다. 〜人です로 대답합니다.",
      },
      {
        expression: "おすすめは何ですか？",
        meaning: "추천은 뭔가요?",
        usage: "식당에서 추천 메뉴를 물을 때 사용하는 표현입니다.",
      },
      {
        expression: "注文お願いします",
        meaning: "주문할게요 / 주문 부탁합니다",
        usage: "메뉴를 정하고 주문할 때 사용합니다. 〜を注文お願いします의 형태로도 씁니다.",
      },
      {
        expression: "お会計お願いします",
        meaning: "계산 부탁합니다",
        usage: "식사를 마치고 계산할 때 사용하는 표현입니다. 회계(会計)라는 한자를 씁니다.",
      },
    ],
    patternDrill: [
      {
        pattern: "〜を注文お願いします",
        patternKo: "~를 주문할게요 (음식을 주문할 때)",
        blanks: [
          {
            sentence: "___を注文お願いします。",
            answer: "天ぷら定食",
            hint: "덴푸라 정식",
          },
          {
            sentence: "___を注文お願いします。",
            answer: "ラーメン",
            hint: "라멘",
          },
          {
            sentence: "___を注文お願いします。",
            answer: "カレーライス",
            hint: "카레라이스",
          },
        ],
      },
      {
        pattern: "〜は何ですか？",
        patternKo: "~는 뭔가요? (정보를 물을 때)",
        blanks: [
          {
            sentence: "本日の___は何ですか？",
            answer: "日替わりランチ",
            hint: "오늘의 런치",
          },
          {
            sentence: "この料理の___は何ですか？",
            answer: "材料",
            hint: "재료",
          },
          {
            sentence: "デザートの___は何ですか？",
            answer: "おすすめ",
            hint: "추천",
          },
        ],
      },
    ],
  },
  {
    id: "station",
    title: "駅で",
    titleKo: "역에서",
    situation:
      "일본 역에서 표를 사고 목적지까지 가는 방법을 묻는 상황. 역무원에게 노선과 환승 정보를 확인합니다.",
    dialogue: [
      {
        speaker: "You",
        text: "すみません、東京駅までの切符をください。",
        translation: "저기요, 도쿄역까지 표를 주세요.",
      },
      {
        speaker: "Station Staff",
        text: "片道ですか、往復ですか？",
        translation: "편도인가요, 왕복인가요?",
      },
      {
        speaker: "You",
        text: "片道でお願いします。東京駅までどのくらいかかりますか？",
        translation: "편도로 부탁합니다. 도쿄역까지 얼마나 걸리나요?",
      },
      {
        speaker: "Station Staff",
        text: "約40分です。途中、新宿駅で乗り換えが必要です。",
        translation: "약 40분입니다. 도중에 신주쿠역에서 환승이 필요합니다.",
      },
      {
        speaker: "You",
        text: "乗り換えは何番ホームですか？",
        translation: "환승은 몇 번 홈인가요?",
      },
      {
        speaker: "Station Staff",
        text: "3番ホームで中央線に乗り換えてください。",
        translation: "3번 홈에서 주오선으로 환승해 주세요.",
      },
      {
        speaker: "You",
        text: "次の電車は何時ですか？",
        translation: "다음 전철은 몇 시인가요?",
      },
      {
        speaker: "Station Staff",
        text: "次の電車は10時15分発です。2番ホームからです。",
        translation: "다음 전철은 10시 15분 출발입니다. 2번 홈에서 출발합니다.",
      },
    ],
    keyExpressions: [
      {
        expression: "〜までの切符をください",
        meaning: "~까지 표를 주세요",
        usage: "역에서 목적지까지의 표를 살 때 사용합니다. 자동발매기가 아닌 창구에서 구입할 때 씁니다.",
      },
      {
        expression: "乗り換え",
        meaning: "환승",
        usage: "다른 노선으로 갈아타는 것을 말합니다. 乗り換えが必要です (환승이 필요합니다)처럼 사용합니다.",
      },
      {
        expression: "〜までどのくらいかかりますか？",
        meaning: "~까지 얼마나 걸리나요?",
        usage: "목적지까지의 소요 시간을 물을 때 사용하는 표현입니다. 시간뿐 아니라 비용을 물을 때도 씁니다.",
      },
      {
        expression: "〜番ホーム",
        meaning: "~번 홈 (승강장)",
        usage: "전철이 출발하는 승강장 번호를 나타냅니다. 何番ホームですか？ (몇 번 홈인가요?)로 물을 수 있습니다.",
      },
    ],
    patternDrill: [
      {
        pattern: "〜までどのくらいかかりますか？",
        patternKo: "~까지 얼마나 걸리나요? (소요 시간/비용을 물을 때)",
        blanks: [
          {
            sentence: "___までどのくらいかかりますか？",
            answer: "渋谷駅",
            hint: "시부야역",
          },
          {
            sentence: "___までどのくらいかかりますか？",
            answer: "空港",
            hint: "공항",
          },
          {
            sentence: "___までどのくらいかかりますか？",
            answer: "大阪",
            hint: "오사카",
          },
        ],
      },
      {
        pattern: "〜で乗り換えてください",
        patternKo: "~에서 환승해 주세요 (환승 안내를 할 때)",
        blanks: [
          {
            sentence: "___で乗り換えてください。",
            answer: "新宿駅",
            hint: "신주쿠역",
          },
          {
            sentence: "___で乗り換えてください。",
            answer: "池袋駅",
            hint: "이케부쿠로역",
          },
          {
            sentence: "___で乗り換えてください。",
            answer: "品川駅",
            hint: "시나가와역",
          },
        ],
      },
    ],
  },
];
