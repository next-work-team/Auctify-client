import { Clock, Eye, Share2, Users } from 'lucide-react';

import { Button, Card, CardContent } from '@/shared/ui';
import { Input } from '@/shared/ui/input';

export default function BidActionSection({
  title,
  currentBid,
  views,
  timeLeft,
  activeBidders,
  minBidIncrement,
}: {
  title: string;
  currentBid: number;
  views: number;
  timeLeft: string;
  activeBidders: number;
  minBidIncrement: number;
}) {
  return (
    <section>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-muted-foreground">현재 입찰가</p>
                <p className="text-3xl font-bold">
                  ₩{currentBid.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>{views}회 조회</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-amber-500">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{timeLeft} 남음</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{activeBidders}명 참여중</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">
                입찰하기 (최소 ₩
                {(currentBid + minBidIncrement).toLocaleString()})
              </p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder={`₩${(currentBid + minBidIncrement).toLocaleString()}`}
                  className="flex-1"
                />
                <Button>입찰</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * 입찰 시 자동으로 {minBidIncrement.toLocaleString()}
                원씩 증가합니다.
              </p>
            </div>

            <div className="flex justify-between pt-4 border-t">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                공유하기
              </Button>
              <Button variant="outline" size="sm">
                관심 경매 등록
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
