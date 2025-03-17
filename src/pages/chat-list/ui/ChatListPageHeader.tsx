import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function ChatListPageHeader() {
  return (
    <div className="mb-6">
      <Link
        href="/profile"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        프로필로 돌아가기
      </Link>
      <h1 className="text-2xl font-bold mt-2">메시지</h1>
      <p className="text-muted-foreground">다른 사용자와의 대화를 관리하세요</p>
    </div>
  );
}
