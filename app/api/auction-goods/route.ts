import { NextResponse } from 'next/server';

import { AuctionGoods } from '@/entities/auction-goods/models/types';

export async function GET() {
  const mockAuctionGoods: AuctionGoods[] = [
    {
      id: 1,
      name: '골동품 화병',
      firstPrice: 50000,
      description: '청나라 시대의 고급 도자기 화병입니다.',
      buyNowPrice: 200000,
      processStatus: '진행 중',
      status: '양호',
      minimumBidAmount: 1000,
      auctionStartTime: new Date('2025-03-10T10:00:00Z'),
      auctionEndTime: new Date('2025-03-15T18:00:00Z'),
    },
    {
      id: 2,
      name: '빈티지 롤렉스 시계',
      firstPrice: 3000000,
      description: '1950년대 롤렉스 서브마리너, 상태 최상급.',
      buyNowPrice: 10000000,
      processStatus: '대기 중',
      status: '미사용',
      minimumBidAmount: 50000,
      auctionStartTime: new Date('2025-03-12T14:00:00Z'),
      auctionEndTime: new Date('2025-03-20T20:00:00Z'),
    },
    {
      id: 3,
      name: '한정판 나이키 운동화',
      firstPrice: 150000,
      description: '한정판 나이키 에어 조던, 사이즈 270mm.',
      buyNowPrice: 500000,
      processStatus: '종료',
      status: '사용감 있음',
      minimumBidAmount: 5000,
      auctionStartTime: new Date('2025-02-25T08:00:00Z'),
      auctionEndTime: new Date('2025-03-01T12:00:00Z'),
    },
    ...Array.from({ length: 27 }, (_, i) => ({
      id: i + 4,
      name: `경매 물품 ${i + 4}`,
      firstPrice: (i + 4) * 10000,
      description: `설명 ${i + 4}`,
      buyNowPrice: (i + 4) * 30000,
      processStatus: ['진행 중', '대기 중', '종료'][i % 3],
      status: ['양호', '미사용', '사용감 있음'][i % 3],
      minimumBidAmount: 1000 * (i + 1),
      auctionStartTime: new Date(`2025-03-${(i % 28) + 1}T10:00:00Z`),
      auctionEndTime: new Date(`2025-03-${(i % 28) + 5}T18:00:00Z`),
    })),
  ];

  return NextResponse.json(mockAuctionGoods);
}
