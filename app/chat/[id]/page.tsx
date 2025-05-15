import ChatDetailWindow from '@/pages/chat-detail/ui/ChatDetailWindow';
import PrevLink from '@/widgets/ui/PrevLink';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <PrevLink className="sm:hidden" />
      <ChatDetailWindow chatId={Number((await params).id)} />
    </>
  );
}
