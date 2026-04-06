import { conversations } from "@/data/conversation";
import ConversationClient from "./client";

export function generateStaticParams() {
  return conversations.map((c) => ({ id: c.id }));
}

export default async function ConversationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ConversationClient id={id} />;
}
