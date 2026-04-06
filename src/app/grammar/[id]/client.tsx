"use client";

import { useState } from "react";
import Link from "next/link";
import { grammarLessons } from "@/data/grammar";

export default function GrammarLessonClient({ id }: { id: string }) {
  const lesson = grammarLessons.find((l) => l.id === id);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">레슨을 찾을 수 없습니다.</p>
        <Link href="/grammar" className="text-blue-600 underline mt-2 block">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const quiz = lesson.quiz;
  const q = quiz[currentQ];

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (currentQ + 1 < quiz.length) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function resetQuiz() {
    setQuizStarted(false);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <div>
      <Link
        href="/grammar"
        className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block"
      >
        &larr; 목록으로
      </Link>

      <h1 className="text-2xl font-bold mb-1">{lesson.titleKo}</h1>
      <p className="text-gray-500 mb-6">{lesson.title}</p>

      <section className="mb-6">
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
          <p className="text-gray-700 leading-relaxed">{lesson.explanation}</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-bold text-lg mb-3">규칙</h2>
        <div className="space-y-2">
          {lesson.rules.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100"
            >
              <span className="text-blue-600 font-mono font-bold text-sm mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="font-medium">{r.rule}</p>
                <p className="text-sm text-gray-500">{r.ruleKo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-lg mb-3">예문</h2>
        <div className="space-y-2">
          {lesson.examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-3 border border-gray-100"
            >
              <p className="font-medium">{ex.en}</p>
              <p className="text-sm text-gray-500">{ex.ko}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-3">퀴즈</h2>

        {!quizStarted ? (
          <button
            onClick={() => setQuizStarted(true)}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            퀴즈 시작하기 ({quiz.length}문제)
          </button>
        ) : finished ? (
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-2xl font-bold mb-2">
              {score} / {quiz.length}
            </p>
            <p className="text-gray-500 mb-4">
              {score === quiz.length
                ? "완벽해요!"
                : score >= quiz.length / 2
                  ? "잘했어요!"
                  : "다시 복습해보세요!"}
            </p>
            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 풀기
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">
                {currentQ + 1} / {quiz.length}
              </span>
              <span className="text-sm text-blue-600 font-medium">
                {score}점
              </span>
            </div>

            <p className="font-bold text-lg mb-4">{q.question}</p>

            <div className="space-y-2 mb-4">
              {q.options.map((opt, i) => {
                let style = "border-gray-200 hover:border-blue-300";
                if (selected !== null) {
                  if (i === q.answer) style = "border-green-500 bg-green-50";
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
              <div className="mb-4">
                <p
                  className={`text-sm font-medium ${selected === q.answer ? "text-green-600" : "text-red-600"}`}
                >
                  {selected === q.answer ? "정답!" : "오답!"}
                </p>
                <p className="text-sm text-gray-500">{q.explanation}</p>
              </div>
            )}

            {selected !== null && (
              <button
                onClick={handleNext}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {currentQ + 1 < quiz.length ? "다음 문제" : "결과 보기"}
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
