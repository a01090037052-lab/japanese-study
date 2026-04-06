"use client";

import { useState } from "react";

type CharType = "hiragana" | "katakana";
type Mode = "chart" | "quiz";

interface KanaChar {
  kana: string;
  romaji: string;
  katakana: string;
}

const kanaRows: { label: string; chars: KanaChar[] }[] = [
  { label: "あ행", chars: [
    { kana: "あ", romaji: "a", katakana: "ア" },
    { kana: "い", romaji: "i", katakana: "イ" },
    { kana: "う", romaji: "u", katakana: "ウ" },
    { kana: "え", romaji: "e", katakana: "エ" },
    { kana: "お", romaji: "o", katakana: "オ" },
  ]},
  { label: "か행", chars: [
    { kana: "か", romaji: "ka", katakana: "カ" },
    { kana: "き", romaji: "ki", katakana: "キ" },
    { kana: "く", romaji: "ku", katakana: "ク" },
    { kana: "け", romaji: "ke", katakana: "ケ" },
    { kana: "こ", romaji: "ko", katakana: "コ" },
  ]},
  { label: "さ행", chars: [
    { kana: "さ", romaji: "sa", katakana: "サ" },
    { kana: "し", romaji: "shi", katakana: "シ" },
    { kana: "す", romaji: "su", katakana: "ス" },
    { kana: "せ", romaji: "se", katakana: "セ" },
    { kana: "そ", romaji: "so", katakana: "ソ" },
  ]},
  { label: "た행", chars: [
    { kana: "た", romaji: "ta", katakana: "タ" },
    { kana: "ち", romaji: "chi", katakana: "チ" },
    { kana: "つ", romaji: "tsu", katakana: "ツ" },
    { kana: "て", romaji: "te", katakana: "テ" },
    { kana: "と", romaji: "to", katakana: "ト" },
  ]},
  { label: "な행", chars: [
    { kana: "な", romaji: "na", katakana: "ナ" },
    { kana: "に", romaji: "ni", katakana: "ニ" },
    { kana: "ぬ", romaji: "nu", katakana: "ヌ" },
    { kana: "ね", romaji: "ne", katakana: "ネ" },
    { kana: "の", romaji: "no", katakana: "ノ" },
  ]},
  { label: "は행", chars: [
    { kana: "は", romaji: "ha", katakana: "ハ" },
    { kana: "ひ", romaji: "hi", katakana: "ヒ" },
    { kana: "ふ", romaji: "fu", katakana: "フ" },
    { kana: "へ", romaji: "he", katakana: "ヘ" },
    { kana: "ほ", romaji: "ho", katakana: "ホ" },
  ]},
  { label: "ま행", chars: [
    { kana: "ま", romaji: "ma", katakana: "マ" },
    { kana: "み", romaji: "mi", katakana: "ミ" },
    { kana: "む", romaji: "mu", katakana: "ム" },
    { kana: "め", romaji: "me", katakana: "メ" },
    { kana: "も", romaji: "mo", katakana: "モ" },
  ]},
  { label: "や행", chars: [
    { kana: "や", romaji: "ya", katakana: "ヤ" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "ゆ", romaji: "yu", katakana: "ユ" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "よ", romaji: "yo", katakana: "ヨ" },
  ]},
  { label: "ら행", chars: [
    { kana: "ら", romaji: "ra", katakana: "ラ" },
    { kana: "り", romaji: "ri", katakana: "リ" },
    { kana: "る", romaji: "ru", katakana: "ル" },
    { kana: "れ", romaji: "re", katakana: "レ" },
    { kana: "ろ", romaji: "ro", katakana: "ロ" },
  ]},
  { label: "わ행", chars: [
    { kana: "わ", romaji: "wa", katakana: "ワ" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "を", romaji: "wo", katakana: "ヲ" },
  ]},
  { label: "ん", chars: [
    { kana: "ん", romaji: "n", katakana: "ン" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "", romaji: "", katakana: "" },
    { kana: "", romaji: "", katakana: "" },
  ]},
];

const dakutenRows: { label: string; chars: KanaChar[] }[] = [
  { label: "が행", chars: [
    { kana: "が", romaji: "ga", katakana: "ガ" },
    { kana: "ぎ", romaji: "gi", katakana: "ギ" },
    { kana: "ぐ", romaji: "gu", katakana: "グ" },
    { kana: "げ", romaji: "ge", katakana: "ゲ" },
    { kana: "ご", romaji: "go", katakana: "ゴ" },
  ]},
  { label: "ざ행", chars: [
    { kana: "ざ", romaji: "za", katakana: "ザ" },
    { kana: "じ", romaji: "ji", katakana: "ジ" },
    { kana: "ず", romaji: "zu", katakana: "ズ" },
    { kana: "ぜ", romaji: "ze", katakana: "ゼ" },
    { kana: "ぞ", romaji: "zo", katakana: "ゾ" },
  ]},
  { label: "だ행", chars: [
    { kana: "だ", romaji: "da", katakana: "ダ" },
    { kana: "ぢ", romaji: "ji", katakana: "ヂ" },
    { kana: "づ", romaji: "zu", katakana: "ヅ" },
    { kana: "で", romaji: "de", katakana: "デ" },
    { kana: "ど", romaji: "do", katakana: "ド" },
  ]},
  { label: "ば행", chars: [
    { kana: "ば", romaji: "ba", katakana: "バ" },
    { kana: "び", romaji: "bi", katakana: "ビ" },
    { kana: "ぶ", romaji: "bu", katakana: "ブ" },
    { kana: "べ", romaji: "be", katakana: "ベ" },
    { kana: "ぼ", romaji: "bo", katakana: "ボ" },
  ]},
  { label: "ぱ행", chars: [
    { kana: "ぱ", romaji: "pa", katakana: "パ" },
    { kana: "ぴ", romaji: "pi", katakana: "ピ" },
    { kana: "ぷ", romaji: "pu", katakana: "プ" },
    { kana: "ぺ", romaji: "pe", katakana: "ペ" },
    { kana: "ぽ", romaji: "po", katakana: "ポ" },
  ]},
];

function getAllChars(type: CharType): KanaChar[] {
  return [...kanaRows, ...dakutenRows]
    .flatMap((r) => r.chars)
    .filter((c) => c.kana !== "");
}

function speak(text: string) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  u.rate = 0.8;
  speechSynthesis.speak(u);
}

export default function ReadingPage() {
  const [charType, setCharType] = useState<CharType>("hiragana");
  const [mode, setMode] = useState<Mode>("chart");
  const [showDakuten, setShowDakuten] = useState(false);
  const [selectedChar, setSelectedChar] = useState<KanaChar | null>(null);

  // Quiz state
  const [quizChars, setQuizChars] = useState<KanaChar[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [qOptions, setQOptions] = useState<string[]>([]);
  const [qSelected, setQSelected] = useState<number | null>(null);
  const [qScore, setQScore] = useState(0);
  const [qFinished, setQFinished] = useState(false);
  const [quizDirection, setQuizDirection] = useState<"kana-to-romaji" | "romaji-to-kana">("kana-to-romaji");

  function startQuiz(direction: "kana-to-romaji" | "romaji-to-kana") {
    const all = getAllChars(charType);
    const shuffled = [...all].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuizChars(shuffled);
    setQuizDirection(direction);
    setQIdx(0);
    setQSelected(null);
    setQScore(0);
    setQFinished(false);
    setMode("quiz");
    generateOptions(shuffled, 0, direction);
  }

  function generateOptions(chars: KanaChar[], idx: number, direction: string) {
    const all = getAllChars(charType);
    const correct = direction === "kana-to-romaji" ? chars[idx].romaji : (charType === "hiragana" ? chars[idx].kana : chars[idx].katakana);
    const others = all
      .filter((c) => (direction === "kana-to-romaji" ? c.romaji : (charType === "hiragana" ? c.kana : c.katakana)) !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((c) => direction === "kana-to-romaji" ? c.romaji : (charType === "hiragana" ? c.kana : c.katakana));
    const opts = [...others, correct].sort(() => Math.random() - 0.5);
    setQOptions(opts);
  }

  function handleQuizSelect(idx: number) {
    if (qSelected !== null) return;
    setQSelected(idx);
    const correct = quizDirection === "kana-to-romaji"
      ? quizChars[qIdx].romaji
      : (charType === "hiragana" ? quizChars[qIdx].kana : quizChars[qIdx].katakana);
    if (qOptions[idx] === correct) setQScore((s) => s + 1);
  }

  function handleQuizNext() {
    if (qIdx + 1 < quizChars.length) {
      const next = qIdx + 1;
      setQIdx(next);
      setQSelected(null);
      generateOptions(quizChars, next, quizDirection);
    } else {
      setQFinished(true);
    }
  }

  const rows = showDakuten ? dakutenRows : kanaRows;

  // 퀴즈 모드
  if (mode === "quiz") {
    if (qFinished) {
      return (
        <div className="text-center py-10">
          <p className="text-4xl font-bold mb-2">{qScore} / {quizChars.length}</p>
          <p className="text-gray-500 mb-6">
            {qScore === quizChars.length ? "완벽해요!" : qScore >= 7 ? "잘했어요!" : "다시 연습해보세요!"}
          </p>
          <div className="flex gap-2 justify-center">
            <button onClick={() => startQuiz(quizDirection)} className="px-6 py-2 bg-blue-600 text-white rounded-lg">다시 풀기</button>
            <button onClick={() => setMode("chart")} className="px-6 py-2 border border-gray-300 rounded-lg">차트로</button>
          </div>
        </div>
      );
    }

    const current = quizChars[qIdx];
    const question = quizDirection === "kana-to-romaji"
      ? (charType === "hiragana" ? current.kana : current.katakana)
      : current.romaji;
    const correct = quizDirection === "kana-to-romaji"
      ? current.romaji
      : (charType === "hiragana" ? current.kana : current.katakana);

    return (
      <div>
        <button onClick={() => setMode("chart")} className="text-sm text-gray-500 hover:text-gray-700 mb-4">
          &larr; 차트로
        </button>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-400">{qIdx + 1} / {quizChars.length}</span>
          <span className="text-sm text-blue-600 font-medium">{qScore}점</span>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="text-center mb-6">
            <p className={`font-bold ${quizDirection === "kana-to-romaji" ? "text-5xl" : "text-3xl"}`}>
              {question}
            </p>
            {quizDirection === "kana-to-romaji" && (
              <button onClick={() => speak(charType === "hiragana" ? current.kana : current.katakana)}
                className="mt-3 text-sm text-blue-600 hover:underline">
                발음 듣기
              </button>
            )}
            <p className="text-sm text-gray-400 mt-2">
              {quizDirection === "kana-to-romaji" ? "이 문자의 발음은?" : "이 발음에 해당하는 문자는?"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {qOptions.map((opt, i) => {
              let style = "border-gray-200 hover:border-blue-300";
              if (qSelected !== null) {
                if (opt === correct) style = "border-green-500 bg-green-50";
                else if (i === qSelected) style = "border-red-500 bg-red-50";
              }
              return (
                <button key={i} onClick={() => handleQuizSelect(i)}
                  className={`p-4 rounded-lg border-2 text-center font-bold transition-colors ${
                    quizDirection === "romaji-to-kana" ? "text-2xl" : "text-lg"
                  } ${style}`}>
                  {opt}
                </button>
              );
            })}
          </div>
          {qSelected !== null && (
            <button onClick={handleQuizNext}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {qIdx + 1 < quizChars.length ? "다음 문제" : "결과 보기"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // 차트 모드
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">읽기 (文字)</h1>
      <p className="text-gray-500 mb-4">히라가나와 가타카나를 마스터하세요</p>

      {/* 히라가나/가타카나 전환 */}
      <div className="flex gap-1 mb-4 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setCharType("hiragana")}
          className={`flex-1 py-2 text-sm rounded-md font-medium transition-colors ${
            charType === "hiragana" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500"
          }`}>
          ひらがな
        </button>
        <button
          onClick={() => setCharType("katakana")}
          className={`flex-1 py-2 text-sm rounded-md font-medium transition-colors ${
            charType === "katakana" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500"
          }`}>
          カタカナ
        </button>
      </div>

      {/* 기본/탁음 전환 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowDakuten(false)}
          className={`px-4 py-1.5 rounded-full text-sm ${!showDakuten ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-600"}`}>
          기본 (청음)
        </button>
        <button
          onClick={() => setShowDakuten(true)}
          className={`px-4 py-1.5 rounded-full text-sm ${showDakuten ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-600"}`}>
          탁음/반탁음
        </button>
      </div>

      {/* 퀴즈 버튼 */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <button onClick={() => startQuiz("kana-to-romaji")}
          className="p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 text-left">
          <p className="font-bold text-sm">문자 → 발음</p>
          <p className="text-[10px] text-gray-500">문자를 보고 발음 맞추기</p>
        </button>
        <button onClick={() => startQuiz("romaji-to-kana")}
          className="p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 text-left">
          <p className="font-bold text-sm">발음 → 문자</p>
          <p className="text-[10px] text-gray-500">발음을 보고 문자 맞추기</p>
        </button>
      </div>

      {/* 50음도 차트 */}
      <div className="space-y-1.5">
        <div className="grid grid-cols-6 gap-1 text-center text-[10px] text-gray-400 font-medium">
          <div></div>
          <div>a</div>
          <div>i</div>
          <div>u</div>
          <div>e</div>
          <div>o</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-6 gap-1">
            <div className="flex items-center justify-center text-[10px] text-gray-400 font-medium">
              {row.label}
            </div>
            {row.chars.map((ch, i) => (
              <button
                key={i}
                disabled={!ch.kana}
                onClick={() => {
                  setSelectedChar(ch);
                  speak(ch.kana);
                }}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center transition-all ${
                  ch.kana
                    ? selectedChar?.romaji === ch.romaji && selectedChar?.kana === ch.kana
                      ? "bg-blue-100 border-2 border-blue-500"
                      : "bg-white border border-gray-200 hover:border-blue-300 active:bg-blue-50"
                    : "bg-transparent"
                }`}>
                {ch.kana && (
                  <>
                    <span className="text-lg font-bold leading-tight">
                      {charType === "hiragana" ? ch.kana : ch.katakana}
                    </span>
                    <span className="text-[9px] text-gray-400 leading-tight">{ch.romaji}</span>
                  </>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* 선택된 문자 상세 */}
      {selectedChar && (
        <div className="mt-4 bg-white rounded-xl p-4 border border-blue-200">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold">{charType === "hiragana" ? selectedChar.kana : selectedChar.katakana}</p>
              <p className="text-xs text-gray-400 mt-1">
                {charType === "hiragana" ? "히라가나" : "가타카나"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-300">
                {charType === "hiragana" ? selectedChar.katakana : selectedChar.kana}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {charType === "hiragana" ? "가타카나" : "히라가나"}
              </p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-2xl font-bold text-blue-600">{selectedChar.romaji}</p>
              <p className="text-xs text-gray-400 mt-1">발음</p>
            </div>
            <button
              onClick={() => speak(selectedChar.kana)}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 shrink-0">
              듣기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
