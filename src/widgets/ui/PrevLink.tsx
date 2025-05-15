'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { cn } from '@/shared/lib/utils';

interface PrevLinkProps {
  href?: string; // 명시적 경로 (옵션)
  label?: string; // 버튼에 표시할 텍스트
  className?: string;
}

export default function PrevLink({
  href,
  label = '이전으로',
  className,
}: PrevLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      e.preventDefault();
    }

    router.back();
  };

  return (
    <Link
      href={href || '#'}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-4',
        className,
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
