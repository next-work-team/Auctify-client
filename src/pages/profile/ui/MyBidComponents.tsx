import Image from 'next/image';
import { ExternalLink, Edit, Trash2 } from 'lucide-react';

import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardFooter } from '@/shared/ui/Card';
import { Separator } from '@/shared/ui/separator';

interface AuctionItemType {
  id: string;
  title: string;
  startPrice: string;
  currentPrice: string;
  endDate: string;
  image: string;
  status: 'active' | 'ended' | 'sold' | 'draft';
  bids: number;
}

export function MyBidComponents({ auction }: { auction: AuctionItemType }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            진행중
          </span>
        );
      case 'ended':
        return (
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
            종료됨
          </span>
        );
      case 'sold':
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            판매완료
          </span>
        );
      case 'draft':
        return (
          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
            임시저장
          </span>
        );
      default:
        return null;
    }
  };
  return (
    <Card key={auction.id} className="overflow-hidden">
      <div className="relative">
        <Image
          src={auction.image || '/placeholder.svg'}
          alt={auction.title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
        <div className="absolute right-2 top-2">
          {getStatusBadge(auction.status)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-medium">{auction.title}</h3>
        <div className="mt-2 flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground">시작가</p>
            <p>{auction.startPrice}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">현재가</p>
            <p className="font-bold text-blue-700">{auction.currentPrice}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground">입찰수</p>
            <p>{auction.bids}회</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">마감일</p>
            <p>{auction.endDate}</p>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between p-4">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <ExternalLink className="h-4 w-4" />
          보기
        </Button>
        <div className="flex gap-2">
          {auction.status === 'draft' && (
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-500 hover:text-blue-700"
            >
              <Edit className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
