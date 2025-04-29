import Link from 'next/link';

import { ROUTES } from '@shared/constants';
import { Button } from '@/shared/ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';

function Header() {
  // TODO useUser

  return (
    <header className="h-[72px] sticky top-0 bg-white border-b z-50">
      <div className="container mx-auto h-full flex justify-between items-center">
        {/* 로고 */}
        <div>
          <Link href={ROUTES.HOME}>
            <h1 className="text-2xl font-bold">Auctify</h1>
          </Link>
        </div>

        {/* 메인 내비게이션 */}
        <nav className="hidden sm:flex gap-x-4 items-center">
          <Button variant="link" asChild>
            <Link href={ROUTES.AUCTIONS.ROOT}>경매 목록</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href={ROUTES.SIGN_IN}>로그인</Link>
          </Button>

          {/* 인증 완료시 노출 아바타 섹션 */}
          <Button variant="link" asChild>
            <Link href={ROUTES.AUCTIONS.REGISTER}>경매 등록</Link>
          </Button>
          <Link href={ROUTES.MYPAGE.ROOT}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>강</AvatarFallback>
            </Avatar>
          </Link>
        </nav>

        {/* 모바일 내비게이션 */}
        <nav className="block sm:hidden">모바일 내비게이션</nav>
      </div>
    </header>
  );
}

export default Header;
