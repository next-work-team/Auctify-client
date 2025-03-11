import React from 'react';

import { Button } from '@/shared/ui';

export default function ActiveAuctionGoodsFilters() {
  return (
    <div className="bg-muted/40 p-3 rounded-lg">
      <div className="flex flex-wrap gap-2">
        <div className="bg-background text-sm px-3 py-1 rounded-full flex items-center">
          전자제품
          <button className="ml-1 text-muted-foreground hover:text-foreground">
            ×
          </button>
        </div>
        <div className="bg-background text-sm px-3 py-1 rounded-full flex items-center">
          가격: 10만원 - 100만원
          <button className="ml-1 text-muted-foreground hover:text-foreground">
            ×
          </button>
        </div>
        <div className="bg-background text-sm px-3 py-1 rounded-full flex items-center">
          종료 임박
          <button className="ml-1 text-muted-foreground hover:text-foreground">
            ×
          </button>
        </div>
        <Button variant="link" size="sm" className="text-xs h-auto p-0">
          필터 초기화
        </Button>
      </div>
    </div>
  );
}
