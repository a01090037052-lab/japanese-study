"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { vocabulary, categories } from "@/data/vocabulary";
import { updateStudyRecord, getStats } from "@/lib/storage";

type QuizMode = "en-to-ko" | "ko-to-en" | "listening";
const PAGE_SIZE = 20;

export default function VocabularyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [quizWords, setQuizWords] = useState(vocabulary);
  const [options, setOptions] = useState<string[]>([]);
  const [stats, setStats] = useState({ totalStudied: 0, mastered: 0, dueForReview: 0, totalCorrect: 0, totalWrong: 0 });
  const [showCard, setShowCard] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [cardIdx, setCardIdx] = useState(0);

  useEffect(() => {
    setStats(getStats());
  }, [quizMode, finished]);

  // Reset visible count when category or search changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategory, searchQuery]);

  const filteredWords = useMemo(() => {
    let words = selectedCategory === "all"
      ? vocabulary
      : vocabulary.filter((w) => w.category === selectedCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      words = words.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.includes(q)
      );
    }

    return words;
  }, [selectedCategory, searchQuery]);

  const visibleWords = filteredWords.slice(0, visibleCount);
  const hasMore = visibleCount < filteredWords.length;

  const generateOptions = useCallback(
    (correctWord: typeof vocabulary[0], mode: QuizMode) => {
      const others = vocabulary
        .filter((w) => w.id !== correctWord.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const allOptions = [...others, correctWord].sort(
        () => Math.random() - 0.5
      );

      return allOptions.map((w) =>
        mode === "en-to-ko" || mode === "listening" ? w.meaning : w.word
      );
    },
    []
  );

  function startQuiz(mode: QuizMode) {
    const words = [...filteredWords].sort(() => Math.random() - 0.5).slice(0, Math.min(10, filteredWords.length));
    setQuizWords(words);
    setQuizMode(mode);
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setOptions(generateOptions(words[0], mode));
  }

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const word = quizWords[currentIdx];
    const correctAnswer =
      quizMode === "en-to-ko" || quizMode === "listening"
        ? word.meaning
        : word.word;
    const isCorrect = options[idx] === correctAnswer;
    if (isCorrect) setScore((s) => s + 1);
    updateStudyRecord(word.id, isCorrect);
  }

  function handleNext() {
    if (currentIdx + 1 < quizWords.length) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setSelected(null);
      setOptions(generateOptions(quizWords[nextIdx], quizMode!));
    } else {
      setFinished(true);
    }
  }

  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }

  // 단어 카드 보기
  if (showCard) {
    const word = filteredWords[cardIdx];
    return (
      <div>
        <button
          onClick={() => setShowCard(false)}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          &larr; 돌아가기
        </button>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            {cardIdx + 1} / {filteredWords.length}
          </span>
        </div>

        <div
          onClick={() => setCardFlipped(!cardFlipped)}
          className="bg-white rounded-2xl p-8 border-2 border-gray-200 min-h-[250px] flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
        >
          {!cardFlipped ? (
            <>
              <p className="text-3xl font-bold mb-2">{word.word}</p>
              <p className="text-sm text-gray-400">[{word.pronunciation}]</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word.word);
                }}
                className="mt-4 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200"
              >
                발음 듣기
              </button>
              <p className="text-xs text-gray-400 mt-4">탭하여 뜻 보기</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-1">{word.partOfSpeech}</p>
              <p className="text-2xl font-bold mb-4">{word.meaning}</p>
              {word.examples.map((ex, i) => (
                <div key={i} className="text-center mb-2">
                  <p className="text-sm font-medium">{ex.en}</p>
                  <p className="text-xs text-gray-500">{ex.ko}</p>
                </div>
              ))}
              <p className="text-xs text-gray-400 mt-4">탭하여 단어 보기</p>
            </>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => {
              setCardIdx(Math.max(0, cardIdx - 1));
              setCardFlipped(false);
            }}
            disabled={cardIdx === 0}
            className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-30"
          >
            이전
          </button>
          <button
            onClick={() => {
              setCardIdx(Math.min(filteredWords.length - 1, cardIdx + 1));
              setCardFlipped(false);
            }}
            disabled={cardIdx === filteredWords.length - 1}
            className="flex-1 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-30"
          >
            다음
          </button>
        </div>
      </div>
    );
  }

  // 퀴즈 모드
  if (quizMode) {
    if (finished) {
      return (
        <div className="text-center py-10">
          <p className="text-4xl font-bold mb-2">
            {score} / {quizWords.length}
          </p>
          <p className="text-gray-500 mb-6">
            {score === quizWords.length
              ? "완벽해요!"
              : score >= quizWords.length / 2
                ? "잘했어요!"
                : "다시 복습해보세요!"}
          </p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => startQuiz(quizMode)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              다시 풀기
            </button>
            <button
              onClick={() => setQuizMode(null)}
              className="px-6 py-2 border border-gray-300 rounded-lg"
            >
              돌아가기
            </button>
          </div>
        </div>
      );
    }

    const word = quizWords[currentIdx];
    const correctAnswer =
      quizMode === "en-to-ko" || quizMode === "listening"
        ? word.meaning
        : word.word;

    return (
      <div>
        <button
          onClick={() => setQuizMode(null)}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          &larr; 돌아가기
        </button>

        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-400">
            {currentIdx + 1} / {quizWords.length}
          </span>
          <span className="text-sm text-blue-600 font-medium">{score}점</span>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          {quizMode === "listening" ? (
            <div className="text-center mb-6">
              <button
                onClick={() => speak(word.word)}
                className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl text-lg hover:bg-blue-200"
              >
                발음 듣기
              </button>
              <p className="text-sm text-gray-400 mt-2">듣고 뜻을 고르세요</p>
            </div>
          ) : (
            <div className="text-center mb-6">
              <p className="text-2xl font-bold">
                {quizMode === "en-to-ko" ? word.word : word.meaning}
              </p>
              {quizMode === "en-to-ko" && (
                <button
                  onClick={() => speak(word.word)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  발음 듣기
                </button>
              )}
            </div>
          )}

          <div className="space-y-2">
            {options.map((opt, i) => {
              let style = "border-gray-200 hover:border-blue-300";
              if (selected !== null) {
                if (opt === correctAnswer) style = "border-green-500 bg-green-50";
                else if (i === selected) style = "border-red-500 bg-red-50";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <button
              onClick={handleNext}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {currentIdx + 1 < quizWords.length ? "다음 문제" : "결과 보기"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // 메인 화면
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">단어 (Vocabulary)</h1>
      <p className="text-gray-500 mb-6">주제별 단어를 학습하세요</p>

      {/* 통계 */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <p className="text-xl font-bold text-blue-600">{stats.totalStudied}</p>
          <p className="text-xs text-gray-500">학습한 단어</p>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <p className="text-xl font-bold text-green-600">{stats.mastered}</p>
          <p className="text-xs text-gray-500">마스터</p>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <p className="text-xl font-bold text-orange-600">{stats.dueForReview}</p>
          <p className="text-xs text-gray-500">복습 필요</p>
        </div>
      </div>

      {/* 검색 */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="단어 또는 뜻 검색..."
          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* 카테고리 */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-200 text-gray-600"
          }`}
        >
          전체 ({vocabulary.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
              selectedCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-200 text-gray-600"
            }`}
          >
            {cat.icon} {cat.name} (
            {vocabulary.filter((w) => w.category === cat.id).length})
          </button>
        ))}
      </div>

      {/* 학습 모드 */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => {
            setCardIdx(0);
            setCardFlipped(false);
            setShowCard(true);
          }}
          className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 text-left"
        >
          <p className="font-bold mb-1">단어 카드</p>
          <p className="text-xs text-gray-500">카드를 넘기며 학습</p>
        </button>
        <button
          onClick={() => startQuiz("en-to-ko")}
          className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 text-left"
        >
          <p className="font-bold mb-1">영 → 한 퀴즈</p>
          <p className="text-xs text-gray-500">영어 보고 뜻 맞추기</p>
        </button>
        <button
          onClick={() => startQuiz("ko-to-en")}
          className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 text-left"
        >
          <p className="font-bold mb-1">한 → 영 퀴즈</p>
          <p className="text-xs text-gray-500">한국어 보고 단어 맞추기</p>
        </button>
        <button
          onClick={() => startQuiz("listening")}
          className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 text-left"
        >
          <p className="font-bold mb-1">듣기 퀴즈</p>
          <p className="text-xs text-gray-500">발음 듣고 뜻 맞추기</p>
        </button>
      </div>

      {/* 단어 목록 */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold">단어 목록</h2>
        <span className="text-xs text-gray-400">{filteredWords.length}개</span>
      </div>

      {filteredWords.length === 0 ? (
        <p className="text-center text-gray-400 py-8">검색 결과가 없습니다.</p>
      ) : (
        <>
          <div className="space-y-2">
            {visibleWords.map((word) => (
              <div
                key={word.id}
                className="bg-white rounded-lg p-3 border border-gray-100 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{word.word}</span>
                    <span className="text-xs text-gray-400">
                      [{word.pronunciation}]
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{word.meaning}</p>
                </div>
                <button
                  onClick={() => speak(word.word)}
                  className="text-blue-600 text-sm hover:underline shrink-0"
                >
                  발음
                </button>
              </div>
            ))}
          </div>

          {hasMore && (
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="w-full mt-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
            >
              더 보기 ({filteredWords.length - visibleCount}개 남음)
            </button>
          )}
        </>
      )}
    </div>
  );
}
