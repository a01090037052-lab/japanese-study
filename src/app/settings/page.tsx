"use client";

import { useState, useRef } from "react";

const STORAGE_KEY = "english-study-progress";

export default function SettingsPage() {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function showMessage(type: "success" | "error", text: string) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  }

  function handleExport() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      showMessage("error", "저장된 학습 데이터가 없습니다.");
      return;
    }

    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `english-study-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showMessage("success", "백업 파일이 다운로드되었습니다.");
  }

  function handleImport() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        JSON.parse(text); // validate JSON
        localStorage.setItem(STORAGE_KEY, text);
        showMessage("success", "학습 데이터가 복원되었습니다.");
      } catch {
        showMessage("error", "올바른 백업 파일이 아닙니다.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function handleReset() {
    if (confirm("정말 모든 학습 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      localStorage.removeItem(STORAGE_KEY);
      showMessage("success", "모든 학습 데이터가 삭제되었습니다.");
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">설정</h1>
      <p className="text-gray-500 mb-6">데이터 관리</p>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="space-y-4">
        {/* 백업 */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <h2 className="font-bold mb-1">데이터 백업</h2>
          <p className="text-sm text-gray-500 mb-3">
            학습 기록을 파일로 저장합니다. 기기 변경 시 사용하세요.
          </p>
          <button
            onClick={handleExport}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            백업 파일 다운로드
          </button>
        </div>

        {/* 복원 */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <h2 className="font-bold mb-1">데이터 복원</h2>
          <p className="text-sm text-gray-500 mb-3">
            백업 파일에서 학습 기록을 복원합니다.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={handleImport}
            className="w-full py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
          >
            백업 파일에서 복원
          </button>
        </div>

        {/* 초기화 */}
        <div className="bg-white rounded-xl p-5 border border-red-100">
          <h2 className="font-bold mb-1 text-red-600">데이터 초기화</h2>
          <p className="text-sm text-gray-500 mb-3">
            모든 학습 기록을 삭제합니다. 삭제 전 백업을 권장합니다.
          </p>
          <button
            onClick={handleReset}
            className="w-full py-3 bg-red-50 border-2 border-red-300 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors"
          >
            모든 데이터 삭제
          </button>
        </div>
      </div>
    </div>
  );
}
