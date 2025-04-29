import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HomeNavLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
    >
      <ArrowLeft className="h-4 w-4" />
      홈으로 돌아가기
    </Link>
  );
}
