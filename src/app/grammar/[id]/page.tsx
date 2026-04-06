import { grammarLessons } from "@/data/grammar";
import GrammarLessonClient from "./client";

export function generateStaticParams() {
  return grammarLessons.map((l) => ({ id: l.id }));
}

export default async function GrammarLessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <GrammarLessonClient id={id} />;
}
