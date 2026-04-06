export interface Word {
  id: string;
  word: string;
  meaning: string;
  pronunciation: string;
  partOfSpeech: string;
  category: string;
  examples: { en: string; ko: string }[];
}

export const categories = [
  { id: "daily", name: "일상", icon: "🏠" },
  { id: "food", name: "음식", icon: "🍽️" },
  { id: "travel", name: "여행", icon: "✈️" },
  { id: "emotion", name: "감정", icon: "😊" },
  { id: "business", name: "비즈니스", icon: "💼" },
  { id: "shopping", name: "쇼핑", icon: "🛒" },
];

export const vocabulary: Word[] = [
  // 일상
  { id: "d1", word: "朝ごはん", meaning: "아침밥", pronunciation: "あさごはん", partOfSpeech: "명사", category: "daily", examples: [{ en: "朝ごはんを食べましたか。", ko: "아침밥 먹었어요?" }, { en: "朝ごはんはパンです。", ko: "아침밥은 빵입니다." }] },
  { id: "d2", word: "仕事", meaning: "일, 직장", pronunciation: "しごと", partOfSpeech: "명사", category: "daily", examples: [{ en: "仕事は何ですか。", ko: "직업이 뭐예요?" }, { en: "今日は仕事が忙しいです。", ko: "오늘은 일이 바쁩니다." }] },
  { id: "d3", word: "電話", meaning: "전화", pronunciation: "でんわ", partOfSpeech: "명사", category: "daily", examples: [{ en: "電話をかけます。", ko: "전화를 겁니다." }, { en: "電話番号を教えてください。", ko: "전화번호를 알려주세요." }] },
  { id: "d4", word: "約束", meaning: "약속", pronunciation: "やくそく", partOfSpeech: "명사", category: "daily", examples: [{ en: "明日の約束を忘れないで。", ko: "내일 약속 잊지 마." }, { en: "約束の時間に遅れました。", ko: "약속 시간에 늦었습니다." }] },
  { id: "d5", word: "掃除", meaning: "청소", pronunciation: "そうじ", partOfSpeech: "명사", category: "daily", examples: [{ en: "部屋を掃除します。", ko: "방을 청소합니다." }, { en: "掃除が好きではありません。", ko: "청소를 좋아하지 않습니다." }] },
  { id: "d6", word: "洗濯", meaning: "빨래", pronunciation: "せんたく", partOfSpeech: "명사", category: "daily", examples: [{ en: "洗濯をしなければなりません。", ko: "빨래를 해야 합니다." }, { en: "洗濯物を干します。", ko: "빨래를 널어요." }] },
  { id: "d7", word: "散歩", meaning: "산책", pronunciation: "さんぽ", partOfSpeech: "명사", category: "daily", examples: [{ en: "公園を散歩します。", ko: "공원을 산책합니다." }, { en: "犬と散歩に行きます。", ko: "개와 산책하러 갑니다." }] },
  { id: "d8", word: "準備", meaning: "준비", pronunciation: "じゅんび", partOfSpeech: "명사", category: "daily", examples: [{ en: "旅行の準備をします。", ko: "여행 준비를 합니다." }, { en: "準備はできましたか。", ko: "준비는 됐나요?" }] },
  { id: "d9", word: "休み", meaning: "휴일, 쉬는 날", pronunciation: "やすみ", partOfSpeech: "명사", category: "daily", examples: [{ en: "明日は休みです。", ko: "내일은 쉬는 날입니다." }, { en: "休みの日は何をしますか。", ko: "쉬는 날에는 뭘 해요?" }] },
  { id: "d10", word: "家族", meaning: "가족", pronunciation: "かぞく", partOfSpeech: "명사", category: "daily", examples: [{ en: "家族は4人です。", ko: "가족은 4명입니다." }, { en: "家族と旅行に行きます。", ko: "가족과 여행을 갑니다." }] },
  // 음식
  { id: "f1", word: "食べる", meaning: "먹다", pronunciation: "たべる", partOfSpeech: "동사", category: "food", examples: [{ en: "何を食べますか。", ko: "뭘 먹을래요?" }, { en: "お寿司を食べたいです。", ko: "초밥을 먹고 싶어요." }] },
  { id: "f2", word: "飲む", meaning: "마시다", pronunciation: "のむ", partOfSpeech: "동사", category: "food", examples: [{ en: "お茶を飲みます。", ko: "차를 마십니다." }, { en: "何を飲みますか。", ko: "뭘 마실래요?" }] },
  { id: "f3", word: "料理", meaning: "요리", pronunciation: "りょうり", partOfSpeech: "명사", category: "food", examples: [{ en: "日本料理が好きです。", ko: "일본 요리를 좋아합니다." }, { en: "料理を作ります。", ko: "요리를 만듭니다." }] },
  { id: "f4", word: "注文", meaning: "주문", pronunciation: "ちゅうもん", partOfSpeech: "명사", category: "food", examples: [{ en: "注文をお願いします。", ko: "주문하겠습니다." }, { en: "注文はお決まりですか。", ko: "주문 정하셨나요?" }] },
  { id: "f5", word: "美味しい", meaning: "맛있다", pronunciation: "おいしい", partOfSpeech: "형용사", category: "food", examples: [{ en: "このラーメンは美味しいです。", ko: "이 라멘은 맛있습니다." }, { en: "美味しかったです。", ko: "맛있었습니다." }] },
  { id: "f6", word: "ご飯", meaning: "밥, 식사", pronunciation: "ごはん", partOfSpeech: "명사", category: "food", examples: [{ en: "ご飯を食べましょう。", ko: "밥 먹읍시다." }, { en: "ご飯はもう食べましたか。", ko: "식사는 이미 했나요?" }] },
  { id: "f7", word: "肉", meaning: "고기", pronunciation: "にく", partOfSpeech: "명사", category: "food", examples: [{ en: "肉と魚、どちらが好きですか。", ko: "고기와 생선 중 뭘 좋아해요?" }, { en: "この肉は柔らかいです。", ko: "이 고기는 부드럽습니다." }] },
  { id: "f8", word: "魚", meaning: "생선", pronunciation: "さかな", partOfSpeech: "명사", category: "food", examples: [{ en: "魚が新鮮です。", ko: "생선이 신선합니다." }, { en: "焼き魚が好きです。", ko: "구운 생선을 좋아합니다." }] },
  { id: "f9", word: "野菜", meaning: "채소", pronunciation: "やさい", partOfSpeech: "명사", category: "food", examples: [{ en: "野菜をたくさん食べましょう。", ko: "채소를 많이 먹읍시다." }, { en: "この野菜は新鮮です。", ko: "이 채소는 신선합니다." }] },
  { id: "f10", word: "弁当", meaning: "도시락", pronunciation: "べんとう", partOfSpeech: "명사", category: "food", examples: [{ en: "弁当を買います。", ko: "도시락을 삽니다." }, { en: "母が弁当を作ってくれました。", ko: "어머니가 도시락을 만들어 주셨어요." }] },
  // 여행
  { id: "t1", word: "空港", meaning: "공항", pronunciation: "くうこう", partOfSpeech: "명사", category: "travel", examples: [{ en: "空港まで何分かかりますか。", ko: "공항까지 몇 분 걸려요?" }, { en: "空港に着きました。", ko: "공항에 도착했습니다." }] },
  { id: "t2", word: "駅", meaning: "역", pronunciation: "えき", partOfSpeech: "명사", category: "travel", examples: [{ en: "駅はどこですか。", ko: "역은 어디예요?" }, { en: "駅まで歩きます。", ko: "역까지 걸어갑니다." }] },
  { id: "t3", word: "切符", meaning: "표, 티켓", pronunciation: "きっぷ", partOfSpeech: "명사", category: "travel", examples: [{ en: "切符を買います。", ko: "표를 삽니다." }, { en: "切符はいくらですか。", ko: "표는 얼마예요?" }] },
  { id: "t4", word: "電車", meaning: "전철", pronunciation: "でんしゃ", partOfSpeech: "명사", category: "travel", examples: [{ en: "電車で行きます。", ko: "전철로 갑니다." }, { en: "次の電車は何時ですか。", ko: "다음 전철은 몇 시예요?" }] },
  { id: "t5", word: "ホテル", meaning: "호텔", pronunciation: "ほてる", partOfSpeech: "명사", category: "travel", examples: [{ en: "ホテルを予約しました。", ko: "호텔을 예약했습니다." }, { en: "ホテルはどこですか。", ko: "호텔은 어디예요?" }] },
  { id: "t6", word: "観光", meaning: "관광", pronunciation: "かんこう", partOfSpeech: "명사", category: "travel", examples: [{ en: "東京を観光します。", ko: "도쿄를 관광합니다." }, { en: "観光地はどこがいいですか。", ko: "관광지는 어디가 좋아요?" }] },
  { id: "t7", word: "地図", meaning: "지도", pronunciation: "ちず", partOfSpeech: "명사", category: "travel", examples: [{ en: "地図を見てください。", ko: "지도를 봐 주세요." }, { en: "地図がありますか。", ko: "지도가 있나요?" }] },
  { id: "t8", word: "荷物", meaning: "짐", pronunciation: "にもつ", partOfSpeech: "명사", category: "travel", examples: [{ en: "荷物が多いです。", ko: "짐이 많습니다." }, { en: "荷物を預けてもいいですか。", ko: "짐을 맡겨도 될까요?" }] },
  { id: "t9", word: "予約", meaning: "예약", pronunciation: "よやく", partOfSpeech: "명사", category: "travel", examples: [{ en: "予約をしたいのですが。", ko: "예약을 하고 싶은데요." }, { en: "予約はしていません。", ko: "예약은 하지 않았습니다." }] },
  { id: "t10", word: "出発", meaning: "출발", pronunciation: "しゅっぱつ", partOfSpeech: "명사", category: "travel", examples: [{ en: "出発は何時ですか。", ko: "출발은 몇 시예요?" }, { en: "明日出発します。", ko: "내일 출발합니다." }] },
  // 감정
  { id: "e1", word: "嬉しい", meaning: "기쁘다", pronunciation: "うれしい", partOfSpeech: "형용사", category: "emotion", examples: [{ en: "プレゼントをもらって嬉しいです。", ko: "선물을 받아서 기쁩니다." }, { en: "合格して嬉しいです。", ko: "합격해서 기쁩니다." }] },
  { id: "e2", word: "悲しい", meaning: "슬프다", pronunciation: "かなしい", partOfSpeech: "형용사", category: "emotion", examples: [{ en: "映画が悲しかったです。", ko: "영화가 슬펐습니다." }, { en: "別れが悲しいです。", ko: "이별이 슬픕니다." }] },
  { id: "e3", word: "楽しい", meaning: "즐겁다", pronunciation: "たのしい", partOfSpeech: "형용사", category: "emotion", examples: [{ en: "旅行は楽しかったです。", ko: "여행은 즐거웠습니다." }, { en: "毎日が楽しいです。", ko: "매일이 즐겁습니다." }] },
  { id: "e4", word: "怒る", meaning: "화내다", pronunciation: "おこる", partOfSpeech: "동사", category: "emotion", examples: [{ en: "先生が怒りました。", ko: "선생님이 화를 냈습니다." }, { en: "怒らないでください。", ko: "화내지 마세요." }] },
  { id: "e5", word: "心配", meaning: "걱정", pronunciation: "しんぱい", partOfSpeech: "명사", category: "emotion", examples: [{ en: "心配しないでください。", ko: "걱정하지 마세요." }, { en: "試験が心配です。", ko: "시험이 걱정됩니다." }] },
  { id: "e6", word: "安心", meaning: "안심", pronunciation: "あんしん", partOfSpeech: "명사", category: "emotion", examples: [{ en: "安心しました。", ko: "안심했습니다." }, { en: "それを聞いて安心しました。", ko: "그걸 듣고 안심했어요." }] },
  { id: "e7", word: "寂しい", meaning: "외롭다, 쓸쓸하다", pronunciation: "さびしい", partOfSpeech: "형용사", category: "emotion", examples: [{ en: "一人で寂しいです。", ko: "혼자서 외롭습니다." }, { en: "友達がいなくて寂しいです。", ko: "친구가 없어서 외로워요." }] },
  { id: "e8", word: "恥ずかしい", meaning: "부끄럽다", pronunciation: "はずかしい", partOfSpeech: "형용사", category: "emotion", examples: [{ en: "間違えて恥ずかしいです。", ko: "틀려서 부끄럽습니다." }, { en: "恥ずかしくて言えません。", ko: "부끄러워서 말할 수 없어요." }] },
  { id: "e9", word: "疲れる", meaning: "피곤하다", pronunciation: "つかれる", partOfSpeech: "동사", category: "emotion", examples: [{ en: "今日は疲れました。", ko: "오늘은 피곤합니다." }, { en: "仕事で疲れています。", ko: "일 때문에 피곤해요." }] },
  { id: "e10", word: "緊張", meaning: "긴장", pronunciation: "きんちょう", partOfSpeech: "명사", category: "emotion", examples: [{ en: "面接で緊張しています。", ko: "면접에서 긴장하고 있어요." }, { en: "緊張しないでください。", ko: "긴장하지 마세요." }] },
  // 비즈니스
  { id: "b1", word: "会議", meaning: "회의", pronunciation: "かいぎ", partOfSpeech: "명사", category: "business", examples: [{ en: "会議は何時からですか。", ko: "회의는 몇 시부터예요?" }, { en: "午後に会議があります。", ko: "오후에 회의가 있습니다." }] },
  { id: "b2", word: "会社", meaning: "회사", pronunciation: "かいしゃ", partOfSpeech: "명사", category: "business", examples: [{ en: "会社に行きます。", ko: "회사에 갑니다." }, { en: "どんな会社で働いていますか。", ko: "어떤 회사에서 일해요?" }] },
  { id: "b3", word: "名刺", meaning: "명함", pronunciation: "めいし", partOfSpeech: "명사", category: "business", examples: [{ en: "名刺を交換しましょう。", ko: "명함을 교환합시다." }, { en: "名刺をいただけますか。", ko: "명함을 받을 수 있을까요?" }] },
  { id: "b4", word: "上司", meaning: "상사", pronunciation: "じょうし", partOfSpeech: "명사", category: "business", examples: [{ en: "上司に報告します。", ko: "상사에게 보고합니다." }, { en: "上司は厳しいです。", ko: "상사는 엄격합니다." }] },
  { id: "b5", word: "報告", meaning: "보고", pronunciation: "ほうこく", partOfSpeech: "명사", category: "business", examples: [{ en: "報告書を書きます。", ko: "보고서를 씁니다." }, { en: "進捗を報告します。", ko: "진행 상황을 보고합니다." }] },
  { id: "b6", word: "資料", meaning: "자료", pronunciation: "しりょう", partOfSpeech: "명사", category: "business", examples: [{ en: "資料を準備してください。", ko: "자료를 준비해 주세요." }, { en: "この資料を見てください。", ko: "이 자료를 봐 주세요." }] },
  { id: "b7", word: "締め切り", meaning: "마감", pronunciation: "しめきり", partOfSpeech: "명사", category: "business", examples: [{ en: "締め切りはいつですか。", ko: "마감은 언제예요?" }, { en: "締め切りに間に合いません。", ko: "마감에 못 맞추겠어요." }] },
  { id: "b8", word: "残業", meaning: "야근, 잔업", pronunciation: "ざんぎょう", partOfSpeech: "명사", category: "business", examples: [{ en: "今日は残業です。", ko: "오늘은 야근입니다." }, { en: "残業が多いです。", ko: "야근이 많습니다." }] },
  { id: "b9", word: "給料", meaning: "급여", pronunciation: "きゅうりょう", partOfSpeech: "명사", category: "business", examples: [{ en: "給料日はいつですか。", ko: "월급날은 언제예요?" }, { en: "給料が上がりました。", ko: "급여가 올랐습니다." }] },
  { id: "b10", word: "連絡", meaning: "연락", pronunciation: "れんらく", partOfSpeech: "명사", category: "business", examples: [{ en: "後で連絡します。", ko: "나중에 연락하겠습니다." }, { en: "連絡をください。", ko: "연락 주세요." }] },
  // 쇼핑
  { id: "s1", word: "値段", meaning: "가격", pronunciation: "ねだん", partOfSpeech: "명사", category: "shopping", examples: [{ en: "値段はいくらですか。", ko: "가격이 얼마예요?" }, { en: "値段が高いです。", ko: "가격이 비쌉니다." }] },
  { id: "s2", word: "安い", meaning: "싸다", pronunciation: "やすい", partOfSpeech: "형용사", category: "shopping", examples: [{ en: "これは安いです。", ko: "이건 싸요." }, { en: "もっと安いのはありますか。", ko: "더 싼 건 있나요?" }] },
  { id: "s3", word: "高い", meaning: "비싸다, 높다", pronunciation: "たかい", partOfSpeech: "형용사", category: "shopping", examples: [{ en: "ちょっと高いですね。", ko: "좀 비싸네요." }, { en: "品質が高いです。", ko: "품질이 높습니다." }] },
  { id: "s4", word: "割引", meaning: "할인", pronunciation: "わりびき", partOfSpeech: "명사", category: "shopping", examples: [{ en: "割引はありますか。", ko: "할인이 있나요?" }, { en: "20%割引です。", ko: "20% 할인입니다." }] },
  { id: "s5", word: "売り場", meaning: "매장, 판매코너", pronunciation: "うりば", partOfSpeech: "명사", category: "shopping", examples: [{ en: "靴の売り場はどこですか。", ko: "신발 매장은 어디예요?" }, { en: "食品売り場は地下です。", ko: "식품 매장은 지하입니다." }] },
  { id: "s6", word: "レジ", meaning: "계산대", pronunciation: "れじ", partOfSpeech: "명사", category: "shopping", examples: [{ en: "レジはあちらです。", ko: "계산대는 저쪽입니다." }, { en: "レジで払います。", ko: "계산대에서 계산합니다." }] },
  { id: "s7", word: "お釣り", meaning: "거스름돈", pronunciation: "おつり", partOfSpeech: "명사", category: "shopping", examples: [{ en: "お釣りをどうぞ。", ko: "거스름돈 여기요." }, { en: "お釣りはいりません。", ko: "거스름돈은 필요 없어요." }] },
  { id: "s8", word: "袋", meaning: "봉투", pronunciation: "ふくろ", partOfSpeech: "명사", category: "shopping", examples: [{ en: "袋はいりますか。", ko: "봉투 필요하세요?" }, { en: "袋をお願いします。", ko: "봉투 부탁합니다." }] },
  { id: "s9", word: "サイズ", meaning: "사이즈", pronunciation: "さいず", partOfSpeech: "명사", category: "shopping", examples: [{ en: "サイズはいくつですか。", ko: "사이즈가 어떻게 되세요?" }, { en: "もっと大きいサイズはありますか。", ko: "더 큰 사이즈 있나요?" }] },
  { id: "s10", word: "試着", meaning: "시착, 피팅", pronunciation: "しちゃく", partOfSpeech: "명사", category: "shopping", examples: [{ en: "試着してもいいですか。", ko: "입어 봐도 될까요?" }, { en: "試着室はどこですか。", ko: "탈의실은 어디예요?" }] },
];
