import Link from "next/link";

const sections = [
  {
    href: "/grammar",
    title: "기본기",
    description: "문법의 기초부터 탄탄하게",
    icon: "📖",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    items: ["히라가나/가타카나", "です/ます체", "조사"],
  },
  {
    href: "/vocabulary",
    title: "단어",
    description: "주제별 필수 단어 학습",
    icon: "📝",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    items: ["일상", "음식", "여행"],
  },
  {
    href: "/conversation",
    title: "일상 회화",
    description: "실전 대화 패턴 연습",
    icon: "💬",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    items: ["편의점", "식당", "역/교통"],
  },
];

export default function Home() {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Japanese Study</h1>
        <p className="text-gray-500">매일 조금씩, 일본어 실력을 키워보세요</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={`block p-6 rounded-xl border-2 transition-colors ${section.color}`}
          >
            <div className="text-3xl mb-3">{section.icon}</div>
            <h2 className="text-lg font-bold mb-1">{section.title}</h2>
            <p className="text-sm text-gray-600 mb-3">{section.description}</p>
            <ul className="text-xs text-gray-500 space-y-1">
              {section.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
