export interface GrammarLesson {
  id: string;
  title: string;
  titleKo: string;
  category: string;
  level: number;
  explanation: string;
  rules: { rule: string; ruleKo: string }[];
  examples: { en: string; ko: string }[];
  quiz: { question: string; options: string[]; answer: number; explanation: string }[];
}

export const grammarLessons: GrammarLesson[] = [
  {
    id: "hiragana",
    title: "ひらがな",
    titleKo: "히라가나",
    category: "문자",
    level: 1,
    explanation: "히라가나는 일본어의 기본 문자입니다. 46개의 기본 글자와 탁음(゛), 반탁음(゜)으로 구성됩니다.",
    rules: [
      { rule: "あ행: あ(a) い(i) う(u) え(e) お(o)", ruleKo: "모음 5개가 기본" },
      { rule: "か행~わ행: 자음+모음 조합", ruleKo: "か(ka) き(ki) く(ku) け(ke) こ(ko) 등" },
      { rule: "탁음(゛): か→が, さ→ざ, た→だ, は→ば", ruleKo: "탁점을 붙이면 소리가 탁해짐" },
    ],
    examples: [
      { en: "あいうえお", ko: "아이우에오 (모음)" },
      { en: "かきくけこ", ko: "카키쿠케코 (か행)" },
      { en: "さしすせそ", ko: "사시스세소 (さ행)" },
      { en: "たちつてと", ko: "타치츠테토 (た행)" },
      { en: "なにぬねの", ko: "나니누네노 (な행)" },
    ],
    quiz: [
      { question: "'あ'의 발음은?", options: ["a", "i", "u", "e"], answer: 0, explanation: "あ는 'a' 발음입니다." },
      { question: "'き'의 발음은?", options: ["ka", "ki", "ku", "ke"], answer: 1, explanation: "き는 'ki' 발음입니다." },
      { question: "'す'의 발음은?", options: ["sa", "si", "su", "se"], answer: 2, explanation: "す는 'su' 발음입니다." },
      { question: "'か'에 탁점(゛)을 붙이면?", options: ["か", "が", "ぎ", "ぐ"], answer: 1, explanation: "か에 탁점을 붙이면 が(ga)가 됩니다." },
    ],
  },
  {
    id: "katakana",
    title: "カタカナ",
    titleKo: "가타카나",
    category: "문자",
    level: 1,
    explanation: "가타카나는 주로 외래어, 외국 이름, 의성어/의태어를 표기할 때 사용합니다.",
    rules: [
      { rule: "ア행: ア(a) イ(i) ウ(u) エ(e) オ(o)", ruleKo: "히라가나 あ행과 같은 발음" },
      { rule: "장음은 'ー'로 표기", ruleKo: "コーヒー(커피), ケーキ(케이크)" },
      { rule: "외래어 표기에 주로 사용", ruleKo: "テレビ(TV), パソコン(PC)" },
    ],
    examples: [
      { en: "コーヒー", ko: "커피" },
      { en: "レストラン", ko: "레스토랑" },
      { en: "テレビ", ko: "텔레비전" },
      { en: "パソコン", ko: "컴퓨터(PC)" },
      { en: "アイスクリーム", ko: "아이스크림" },
    ],
    quiz: [
      { question: "'커피'를 가타카나로 쓰면?", options: ["コーヒー", "こーひー", "コヒ", "こひ"], answer: 0, explanation: "외래어는 가타카나로 쓰고 장음은 ー로 표기합니다." },
      { question: "'テレビ'의 뜻은?", options: ["라디오", "텔레비전", "전화", "컴퓨터"], answer: 1, explanation: "テレビ는 television에서 온 외래어입니다." },
      { question: "가타카나는 주로 언제 사용하나요?", options: ["일본 고유어", "외래어", "한자 읽기", "존경어"], answer: 1, explanation: "가타카나는 주로 외래어 표기에 사용됩니다." },
      { question: "'ア'에 대응하는 히라가나는?", options: ["あ", "い", "う", "え"], answer: 0, explanation: "ア와 あ는 같은 'a' 발음입니다." },
    ],
  },
  {
    id: "desu-masu",
    title: "です/ます",
    titleKo: "です/ます체 (정중체)",
    category: "기초",
    level: 1,
    explanation: "です는 명사/형용사 뒤에, ます는 동사 뒤에 붙여 정중하게 말하는 표현입니다.",
    rules: [
      { rule: "명사 + です", ruleKo: "~입니다: 学生です (학생입니다)" },
      { rule: "동사ます형 + ます", ruleKo: "~합니다: 食べます (먹습니다)" },
      { rule: "부정: ではありません / ません", ruleKo: "학생ではありません / 食べません" },
    ],
    examples: [
      { en: "私は学生です。", ko: "저는 학생입니다." },
      { en: "毎日日本語を勉強します。", ko: "매일 일본어를 공부합니다." },
      { en: "これは本ではありません。", ko: "이것은 책이 아닙니다." },
      { en: "明日は行きません。", ko: "내일은 가지 않습니다." },
      { en: "天気がいいですね。", ko: "날씨가 좋네요." },
    ],
    quiz: [
      { question: "'저는 회사원입니다'를 일본어로?", options: ["私は会社員です。", "私は会社員ます。", "私は会社員だ。", "私は会社員ある。"], answer: 0, explanation: "명사 뒤에는 です를 붙입니다." },
      { question: "'먹습니다'의 일본어는?", options: ["食べです", "食べます", "食べるです", "食べだ"], answer: 1, explanation: "동사의 정중형은 ます형을 사용합니다." },
      { question: "'行きます'의 부정형은?", options: ["行きではありません", "行きないです", "行きません", "行かないです"], answer: 2, explanation: "ます의 부정은 ません입니다." },
      { question: "'学生ではありません'의 뜻은?", options: ["학생입니다", "학생이 아닙니다", "학생이었습니다", "학생이 됩니다"], answer: 1, explanation: "ではありません은 부정 표현입니다." },
    ],
  },
  {
    id: "particles-basic",
    title: "助詞（基本）",
    titleKo: "기본 조사 (は/が/を/に/で/へ/の)",
    category: "기초",
    level: 1,
    explanation: "조사는 단어 뒤에 붙어 문장에서의 역할을 나타냅니다.",
    rules: [
      { rule: "は(wa): 주제, が(ga): 주어", ruleKo: "は는 '~은/는', が는 '~이/가'" },
      { rule: "を(wo): 목적어, に(ni): 방향/시간", ruleKo: "を는 '~을/를', に는 '~에'" },
      { rule: "で(de): 장소/수단, の(no): 소유", ruleKo: "で는 '~에서', の는 '~의'" },
    ],
    examples: [
      { en: "私は韓国人です。", ko: "저는 한국 사람입니다." },
      { en: "猫が好きです。", ko: "고양이가 좋습니다." },
      { en: "本を読みます。", ko: "책을 읽습니다." },
      { en: "学校に行きます。", ko: "학교에 갑니다." },
      { en: "バスで行きます。", ko: "버스로 갑니다." },
    ],
    quiz: [
      { question: "'私___学生です。'", options: ["が", "は", "を", "に"], answer: 1, explanation: "주제를 나타낼 때는 は를 씁니다." },
      { question: "'水___飲みます。'", options: ["は", "が", "を", "に"], answer: 2, explanation: "목적어 뒤에는 を를 씁니다." },
      { question: "'図書館___勉強します。'", options: ["に", "で", "を", "へ"], answer: 1, explanation: "행위가 일어나는 장소에는 で를 씁니다." },
      { question: "'友達___本'(친구의 책)", options: ["は", "が", "の", "を"], answer: 2, explanation: "소유를 나타낼 때는 の를 씁니다." },
    ],
  },
  {
    id: "adjectives",
    title: "形容詞",
    titleKo: "형용사 (い형/な형)",
    category: "기초",
    level: 1,
    explanation: "일본어 형용사는 い형용사와 な형용사 두 종류로 나뉩니다.",
    rules: [
      { rule: "い형: ~い → ~くない(부정), ~かった(과거)", ruleKo: "高い→高くない→高かった" },
      { rule: "な형: ~だ → ~ではない(부정), ~だった(과거)", ruleKo: "静かだ→静かではない→静かだった" },
      { rule: "명사 수식: い형은 그대로, な형은 +な", ruleKo: "高い山, 静かな場所" },
    ],
    examples: [
      { en: "この映画はおもしろいです。", ko: "이 영화는 재미있습니다." },
      { en: "今日は暑くないです。", ko: "오늘은 덥지 않습니다." },
      { en: "昨日は寒かったです。", ko: "어제는 추웠습니다." },
      { en: "この公園は静かです。", ko: "이 공원은 조용합니다." },
      { en: "きれいな花ですね。", ko: "예쁜 꽃이네요." },
    ],
    quiz: [
      { question: "'高い'의 부정형은?", options: ["高いない", "高くない", "高ない", "高じゃない"], answer: 1, explanation: "い형용사: い→くない" },
      { question: "'静か'는 어떤 형용사?", options: ["い형용사", "な형용사", "동사", "명사"], answer: 1, explanation: "静か는 な형용사입니다." },
      { question: "'おもしろい'의 과거형은?", options: ["おもしろいだった", "おもしろかった", "おもしろくた", "おもしろった"], answer: 1, explanation: "い→かった" },
      { question: "'___な人'(친절한 사람)", options: ["親切", "親切い", "親切く", "親切の"], answer: 0, explanation: "な형용사+な+명사" },
    ],
  },
  {
    id: "verb-groups",
    title: "動詞グループ",
    titleKo: "동사 그룹과 ます형",
    category: "동사",
    level: 2,
    explanation: "일본어 동사는 1그룹(5단), 2그룹(1단), 3그룹(불규칙: する/くる)으로 나뉩니다.",
    rules: [
      { rule: "1그룹: ~う단 → ~い단+ます", ruleKo: "書く→書きます, 飲む→飲みます" },
      { rule: "2그룹: ~る → ~ます", ruleKo: "食べる→食べます, 見る→見ます" },
      { rule: "3그룹: する→します, くる→きます", ruleKo: "불규칙 동사는 2개뿐" },
    ],
    examples: [
      { en: "毎朝コーヒーを飲みます。", ko: "매일 아침 커피를 마십니다." },
      { en: "日本語を勉強します。", ko: "일본어를 공부합니다." },
      { en: "友達が来ます。", ko: "친구가 옵니다." },
      { en: "新聞を読みます。", ko: "신문을 읽습니다." },
      { en: "テレビを見ます。", ko: "텔레비전을 봅니다." },
    ],
    quiz: [
      { question: "'書く'의 ます형은?", options: ["書ます", "書きます", "書くます", "書います"], answer: 1, explanation: "1그룹: く→き+ます" },
      { question: "'食べる'는 몇 그룹?", options: ["1그룹", "2그룹", "3그룹", "4그룹"], answer: 1, explanation: "食べる는 2그룹입니다." },
      { question: "'する'의 ます형은?", options: ["すります", "します", "するます", "さます"], answer: 1, explanation: "3그룹 불규칙: する→します" },
      { question: "'飲む'의 ます형은?", options: ["飲ます", "飲みます", "飲むます", "飲めます"], answer: 1, explanation: "1그룹: む→み+ます" },
    ],
  },
  {
    id: "te-form",
    title: "て形",
    titleKo: "て형 활용",
    category: "동사",
    level: 2,
    explanation: "て형은 가장 많이 쓰이는 활용입니다. ~ている(진행), ~てください(요청) 등에 사용됩니다.",
    rules: [
      { rule: "1그룹: く→いて, ぐ→いで, む/ぶ/ぬ→んで", ruleKo: "書く→書いて, 飲む→飲んで" },
      { rule: "す→して, う/つ/る→って", ruleKo: "話す→話して, 待つ→待って" },
      { rule: "2그룹: る→て / 3그룹: する→して, くる→きて", ruleKo: "食べる→食べて" },
    ],
    examples: [
      { en: "今、本を読んでいます。", ko: "지금 책을 읽고 있습니다." },
      { en: "写真を撮ってください。", ko: "사진을 찍어 주세요." },
      { en: "ここに座ってもいいですか。", ko: "여기 앉아도 될까요?" },
      { en: "食べてから行きます。", ko: "먹고 나서 가겠습니다." },
      { en: "窓を開けてください。", ko: "창문을 열어 주세요." },
    ],
    quiz: [
      { question: "'書く'의 て형은?", options: ["書って", "書いて", "書きて", "書くて"], answer: 1, explanation: "く→いて" },
      { question: "'~ている'의 의미는?", options: ["과거", "진행/상태", "미래", "명령"], answer: 1, explanation: "진행 또는 상태를 나타냅니다." },
      { question: "'飲む'의 て형은?", options: ["飲みて", "飲って", "飲んで", "飲むて"], answer: 2, explanation: "む→んで" },
      { question: "'~てください'의 의미는?", options: ["~해도 됩니다", "~하고 있습니다", "~해 주세요", "~하면 안 됩니다"], answer: 2, explanation: "정중한 요청 표현입니다." },
    ],
  },
  {
    id: "ta-form",
    title: "た形と過去",
    titleKo: "た형과 과거 표현",
    category: "동사",
    level: 2,
    explanation: "た형은 て형과 같은 규칙으로 만들되 て→た, で→だ로 바꿉니다.",
    rules: [
      { rule: "て→た, で→だ", ruleKo: "書いて→書いた, 飲んで→飲んだ" },
      { rule: "~たことがある: 경험", ruleKo: "日本に行ったことがある" },
      { rule: "~たり~たりする: 나열", ruleKo: "食べたり飲んだりする" },
    ],
    examples: [
      { en: "昨日映画を見ました。", ko: "어제 영화를 봤습니다." },
      { en: "日本に行ったことがあります。", ko: "일본에 간 적이 있습니다." },
      { en: "週末は買い物をしたり映画を見たりします。", ko: "주말에는 쇼핑하거나 영화를 봅니다." },
      { en: "もう宿題をしました。", ko: "이미 숙제를 했습니다." },
      { en: "朝ごはんを食べましたか。", ko: "아침밥을 먹었습니까?" },
    ],
    quiz: [
      { question: "'食べる'의 た형은?", options: ["食べった", "食べた", "食べだ", "食べりた"], answer: 1, explanation: "2그룹: る→た" },
      { question: "'~たことがある'의 의미는?", options: ["~한 적이 있다", "~하고 있다", "~할 예정이다", "~하고 싶다"], answer: 0, explanation: "경험을 나타내는 표현입니다." },
      { question: "'行く'의 た형은?", options: ["行いた", "行った", "行きた", "行くた"], answer: 1, explanation: "行く는 예외: 行った" },
      { question: "'飲んだ'의 원형은?", options: ["飲む", "飲る", "飲ぬ", "飲ぶ"], answer: 0, explanation: "飲んだ → 飲む" },
    ],
  },
  {
    id: "potential",
    title: "可能形",
    titleKo: "가능형 (~할 수 있다)",
    category: "문법",
    level: 3,
    explanation: "'~할 수 있다'를 표현합니다. 동사 그룹에 따라 만드는 방법이 다릅니다.",
    rules: [
      { rule: "1그룹: う단→え단+る", ruleKo: "書く→書ける, 飲む→飲める" },
      { rule: "2그룹: る→られる", ruleKo: "食べる→食べられる" },
      { rule: "3그룹: する→できる, くる→こられる", ruleKo: "불규칙" },
    ],
    examples: [
      { en: "日本語が話せます。", ko: "일본어를 말할 수 있습니다." },
      { en: "お箸が使えますか。", ko: "젓가락을 쓸 수 있습니까?" },
      { en: "この漢字が読めません。", ko: "이 한자를 읽을 수 없습니다." },
      { en: "明日来られますか。", ko: "내일 올 수 있습니까?" },
      { en: "ここで泳ぐことができます。", ko: "여기서 수영할 수 있습니다." },
    ],
    quiz: [
      { question: "'書く'의 가능형은?", options: ["書ける", "書かれる", "書きれる", "書くれる"], answer: 0, explanation: "1그룹: く→ける" },
      { question: "'食べる'의 가능형은?", options: ["食べれる", "食べられる", "食べける", "食べできる"], answer: 1, explanation: "2그룹: る→られる" },
      { question: "'する'의 가능형은?", options: ["すれる", "される", "できる", "しられる"], answer: 2, explanation: "する→できる" },
      { question: "'話せます'의 의미는?", options: ["말합니다", "말할 수 있습니다", "말했습니다", "말해 주세요"], answer: 1, explanation: "話す의 가능형 話せる+ます" },
    ],
  },
  {
    id: "conditional",
    title: "条件表現",
    titleKo: "조건 표현 (~たら/~ば/~と/~なら)",
    category: "문법",
    level: 3,
    explanation: "일본어에는 '~하면'에 해당하는 표현이 4가지 있습니다.",
    rules: [
      { rule: "~たら: 범용적, 완료 후 조건", ruleKo: "雨が降ったら行きません" },
      { rule: "~ば: 일반적 조건/가정", ruleKo: "安ければ買います" },
      { rule: "~と: 필연적 결과/습관", ruleKo: "春になると桜が咲く" },
    ],
    examples: [
      { en: "時間があったら、遊びに来てください。", ko: "시간이 있으면 놀러 오세요." },
      { en: "もっと勉強すれば、合格できます。", ko: "더 공부하면 합격할 수 있습니다." },
      { en: "このボタンを押すと、ドアが開きます。", ko: "이 버튼을 누르면 문이 열립니다." },
      { en: "日本に行くなら、京都がおすすめです。", ko: "일본에 간다면 교토를 추천합니다." },
      { en: "暑かったら、エアコンをつけてください。", ko: "더우면 에어컨을 켜 주세요." },
    ],
    quiz: [
      { question: "필연적 결과를 나타내는 조건은?", options: ["~たら", "~ば", "~と", "~なら"], answer: 2, explanation: "~と는 필연적 결과에 사용됩니다." },
      { question: "'安い'의 ~ば형은?", options: ["安いば", "安ければ", "安くば", "安ば"], answer: 1, explanation: "い형: い→ければ" },
      { question: "'食べる'의 ~たら형은?", options: ["食べたら", "食べるたら", "食べれたら", "食べったら"], answer: 0, explanation: "た형+ら = 食べたら" },
      { question: "조언할 때 적절한 조건은?", options: ["~と", "~ば", "~たら", "~なら"], answer: 3, explanation: "상대 상황에 대한 조언에는 ~なら가 적합합니다." },
    ],
  },
];
