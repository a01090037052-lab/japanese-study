"use client";

import { useState } from "react";
import Link from "next/link";
import { grammarLessons } from "@/data/grammar";

const levelGroups = [
  { level: 1, label: "기초", color: "bg-green-100 text-green-700", border: "border-green-200", bg: "bg-green-50" },
  { level: 2, label: "중급", color: "bg-blue-100 text-blue-700", border: "border-blue-200", bg: "bg-blue-50" },
  { level: 3, label: "중상", color: "bg-purple-100 text-purple-700", border: "border-purple-200", bg: "bg-purple-50" },
  { level: 4, label: "고급", color: "bg-red-100 text-red-700", border: "border-red-200", bg: "bg-red-50" },
];

export default function GrammarPage() {
  const [openLevel, setOpenLevel] = useState<number | null>(null);

  function toggleLevel(level: number) {
    setOpenLevel(openLevel === level ? null : level);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">기본기 (Grammar)</h1>
      <p className="text-gray-500 mb-6">
        레벨별로 일본어 문법을 학습하세요 · 총 {grammarLessons.length}개 레슨
      </p>

      <div className="space-y-3">
        {levelGroups.map((group) => {
          const lessons = grammarLessons.filter((l) => l.level === group.level);
          if (lessons.length === 0) return null;
          const isOpen = openLevel === group.level;

          return (
            <section key={group.level}>
              <button
                onClick={() => toggleLevel(group.level)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                  isOpen ? `${group.bg} ${group.border}` : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${group.color}`}
                  >
                    Lv.{group.level}
                  </span>
                  <span className="font-bold">{group.label}</span>
                  <span className="text-xs text-gray-400">
                    {lessons.length}개 레슨
                  </span>
                </div>
                <span className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="mt-2 space-y-2">
                  {lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/grammar/${lesson.id}`}
                      className={`block p-4 bg-white rounded-xl border hover:shadow-sm transition-all ${group.border}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400">
                            {lesson.category}
                          </span>
                          <h2 className="font-bold">{lesson.titleKo}</h2>
                          <p className="text-sm text-gray-500">{lesson.title}</p>
                        </div>
                        <div className="text-gray-400 text-xl">&rarr;</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
