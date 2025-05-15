import { UserIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export default function NoSelectedChatWindow() {
  return (
    <div className="hidden sm:block h-full border rounded-lg p-6">
      <div className="flex flex-col items-center justify-center">
        <UserIcon className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium mb-2">대화를 선택하세요</h3>
        <p className="text-center text-muted-foreground mb-6">
          왼쪽 목록에서 대화를 선택하여 메시지를 확인하고 응답하세요.
        </p>
        <Button asChild>
          <Link href={ROUTES.AUCTIONS.ROOT}>경매 둘러보기</Link>
        </Button>
      </div>
    </div>
  );
}
