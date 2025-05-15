import PrevLink from '@/widgets/ui/PrevLink';

export default function ChatHeader() {
  return (
    <div className="container py-4">
      <PrevLink />
      <h1 className="text-2xl font-bold mt-2">메시지</h1>
      <p className="text-muted-foreground">다른 사용자와의 대화를 관리하세요</p>
    </div>
  );
}
