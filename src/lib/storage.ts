export interface StudyRecord {
  wordId: string;
  correctCount: number;
  wrongCount: number;
  lastStudied: string;
  nextReview: string;
  level: number; // 0-5, higher = longer interval
}

const STORAGE_KEY = "english-study-progress";

function getRecords(): Record<string, StudyRecord> {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveRecords(records: Record<string, StudyRecord>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function getStudyRecord(wordId: string): StudyRecord | null {
  const records = getRecords();
  return records[wordId] || null;
}

export function updateStudyRecord(wordId: string, correct: boolean) {
  const records = getRecords();
  const existing = records[wordId];
  const now = new Date().toISOString();

  // Spaced repetition intervals in days: 1, 2, 4, 7, 14, 30
  const intervals = [1, 2, 4, 7, 14, 30];

  if (existing) {
    const newLevel = correct
      ? Math.min(existing.level + 1, 5)
      : Math.max(existing.level - 1, 0);

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervals[newLevel]);

    records[wordId] = {
      ...existing,
      correctCount: existing.correctCount + (correct ? 1 : 0),
      wrongCount: existing.wrongCount + (correct ? 0 : 1),
      lastStudied: now,
      nextReview: nextDate.toISOString(),
      level: newLevel,
    };
  } else {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervals[0]);

    records[wordId] = {
      wordId,
      correctCount: correct ? 1 : 0,
      wrongCount: correct ? 0 : 1,
      lastStudied: now,
      nextReview: nextDate.toISOString(),
      level: correct ? 1 : 0,
    };
  }

  saveRecords(records);
}

export function getWordsForReview(): string[] {
  const records = getRecords();
  const now = new Date();
  return Object.values(records)
    .filter((r) => new Date(r.nextReview) <= now)
    .map((r) => r.wordId);
}

export function getStats() {
  const records = getRecords();
  const values = Object.values(records);
  return {
    totalStudied: values.length,
    totalCorrect: values.reduce((s, r) => s + r.correctCount, 0),
    totalWrong: values.reduce((s, r) => s + r.wrongCount, 0),
    dueForReview: values.filter((r) => new Date(r.nextReview) <= new Date())
      .length,
    mastered: values.filter((r) => r.level >= 4).length,
  };
}
