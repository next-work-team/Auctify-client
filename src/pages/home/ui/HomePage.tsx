import ArrowDown from '@icons/arrow-down.svg';
import ArrowLeft from '@icons/arrow-left.svg';

import { Button } from '@/shared/ui/Button';

export default function HomePage() {
  return (
    <div>
      포크 레포지 동기화 Test8
      <div>
        아이콘 테스트
        <ArrowDown width={128} height={128} className="*:stroke-blue-500" />
        <ArrowLeft />
      </div>
      <div>
        <p>shadcn/ui 테스트</p>
        <Button>버튼입니다</Button>
      </div>
    </div>
  );
}
