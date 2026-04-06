"use client";

import { useState } from "react";
import Link from "next/link";
import { conversations } from "@/data/conversation";

export default function ConversationClient({ id }: { id: string }) {
  const scenario = conversations.find((c) => c.id === id);
  const [tab, setTab] = useState<"dialogue" | "expressions" | "drill">(
    "dialogue"
  );
  const [visibleTranslations, setVisibleTranslations] = useState<Set<number>>(
    new Set()
  );
  const [drillAnswers, setDrillAnswers] = useState<Record<string, string>>({});
  const [drillChecked, setDrillChecked] = useState<Record<string, boolean>>({});

  if (!scenario) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">시나리오를 찾을 수 없습니다.</p>
        <Link
          href="/conversation"
          className="text-blue-600 underline mt-2 block"
        >
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;
    speechSynthesis.speak(utterance);
  }

  function toggleTranslation(idx: number) {
    setVisibleTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  function checkDrill(key: string) {
    setDrillChecked((prev) => ({ ...prev, [key]: true }));
  }

  const tabs = [
    { key: "dialogue" as const, label: "대화문" },
    { key: "expressions" as const, label: "핵심 표현" },
    { key: "drill" as const, label: "패턴 드릴" },
  ];

  return (
    <div>
      <Link
        href="/conversation"
        className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block"
      >
        &larr; 목록으로
      </Link>

      <h1 className="text-2xl font-bold mb-1">{scenario.titleKo}</h1>
      <p className="text-gray-500 mb-2">{scenario.title}</p>
      <p className="text-sm text-gray-400 mb-6">{scenario.situation}</p>

      <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 py-2 text-sm rounded-md font-medium transition-colors ${
              tab === t.key
                ? "bg-white text-blue-700 shadow-sm"
                : "text-gray-500"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "dialogue" && (
        <div className="space-y-3">
          {scenario.dialogue.map((line, i) => {
            const isYou = line.speaker === "You";
            return (
              <div
                key={i}
                className={`flex flex-col ${isYou ? "items-end" : "items-start"}`}
              >
                <span className="text-xs text-gray-400 mb-1">
                  {line.speaker}
                </span>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    isYou
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-white border border-gray-200 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{line.text}</p>
                </div>
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => speak(line.text)}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    듣기
                  </button>
                  <button
                    onClick={() => toggleTranslation(i)}
                    className="text-xs text-gray-400 hover:underline"
                  >
                    {visibleTranslations.has(i) ? "번역 숨기기" : "번역 보기"}
                  </button>
                </div>
                {visibleTranslations.has(i) && (
                  <p className="text-xs text-gray-400 mt-1">
                    {line.translation}
                  </p>
                )}
              </div>
            );
          })}

          <button
            onClick={() => {
              scenario.dialogue.forEach((line, i) => {
                setTimeout(() => speak(line.text), i * 2500);
              });
            }}
            className="w-full mt-4 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
          >
            전체 대화 듣기
          </button>
        </div>
      )}

      {tab === "expressions" && (
        <div className="space-y-3">
          {scenario.keyExpressions.map((expr, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-gray-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-blue-700">{expr.expression}</p>
                  <p className="text-sm font-medium mt-1">{expr.meaning}</p>
                  <p className="text-xs text-gray-400 mt-1">{expr.usage}</p>
                </div>
                <button
                  onClick={() => speak(expr.expression)}
                  className="text-blue-500 text-sm hover:underline shrink-0 ml-2"
                >
                  듣기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "drill" && (
        <div className="space-y-6">
          {scenario.patternDrill.map((drill, di) => (
            <div key={di}>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 mb-3">
                <p className="font-bold text-purple-700">{drill.pattern}</p>
                <p className="text-sm text-gray-600">{drill.patternKo}</p>
              </div>

              <div className="space-y-3">
                {drill.blanks.map((blank, bi) => {
                  const key = `${di}-${bi}`;
                  const isChecked = drillChecked[key];
                  const userAnswer = drillAnswers[key] || "";
                  const isCorrect =
                    userAnswer.trim().toLowerCase() ===
                    blank.answer.toLowerCase();

                  return (
                    <div
                      key={bi}
                      className="bg-white rounded-lg p-4 border border-gray-200"
                    >
                      <p className="text-sm text-gray-500 mb-2">
                        힌트: {blank.hint}
                      </p>
                      <p className="font-medium mb-2">{blank.sentence}</p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) =>
                            setDrillAnswers((prev) => ({
                              ...prev,
                              [key]: e.target.value,
                            }))
                          }
                          placeholder="빈칸을 채우세요"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                          disabled={isChecked}
                        />
                        {!isChecked ? (
                          <button
                            onClick={() => checkDrill(key)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                          >
                            확인
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              speak(
                                blank.sentence.replace("___", blank.answer)
                              )
                            }
                            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm"
                          >
                            듣기
                          </button>
                        )}
                      </div>
                      {isChecked && (
                        <p
                          className={`text-sm mt-2 ${isCorrect ? "text-green-600" : "text-red-600"}`}
                        >
                          {isCorrect ? "정답!" : `정답: ${blank.answer}`}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
