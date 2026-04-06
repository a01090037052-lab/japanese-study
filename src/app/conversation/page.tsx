import Link from "next/link";
import { conversations } from "@/data/conversation";

export default function ConversationPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">일상 회화 (Conversation)</h1>
      <p className="text-gray-500 mb-6">
        상황별 대화를 연습하세요
      </p>

      <div className="space-y-3">
        {conversations.map((conv) => (
          <Link
            key={conv.id}
            href={`/conversation/${conv.id}`}
            className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold">{conv.titleKo}</h2>
                <p className="text-sm text-gray-500">{conv.title}</p>
                <p className="text-xs text-gray-400 mt-1">{conv.situation}</p>
              </div>
              <div className="text-gray-400 text-xl">&rarr;</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
