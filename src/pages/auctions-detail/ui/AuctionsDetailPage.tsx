'use client';

import { Card, CardContent } from '@/shared/ui';
import { BidInputForm } from '@/features/auction-detail-bid/ui/BidInputForm';
import LikeAuctionButton from '@/features/auction-like/ui/LikeAuctionButton';
import PrevLink from '@/widgets/ui/PrevLink';

import { useAuctionDetail } from '../hooks/useAuctionDetail';

import AuctionImageGallery from './AuctionImageGallery';
import AuctionDetailInfo from './AuctionDetailInfo';
import BidHistorySection from './BidHistorySection';
import AuctionSummaryInfo from './AuctionSummaryInfo';

export function AuctionsDetailPage({ params }: { params: { id: string } }) {
  const { data, isLoading } = useAuctionDetail(parseInt(params.id));
  console.log('🚀 ~ AuctionsDetailPage ~ data:', data);

  if (isLoading) {
    return null;
  }

  const auction = data?.data;

  return (
    <div className="container py-6 md:py-10">
      <PrevLink />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {/* 경매품 이미지 갤러리 섹션 */}
          <AuctionImageGallery
            images={auction?.imageUrls as string[]}
            title={auction?.goodsName as string}
          />

          {/* 경매품 정보 섹션 */}
          <AuctionDetailInfo
            description={auction?.goodsDescription as string}
            seller={{
              name: '카메라마스터',
              rating: 4.9,
              sales: 156,
            }}
          />
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="flex flex-col gap-y-6">
              <AuctionSummaryInfo
                auctionId={auction?.goodsId as number}
                title={auction?.goodsName as string}
                activeBidders={18}
                currentBid={auction?.currentBidPrice as number}
                timeLeft={'2시간 30분'}
                views={342}
              />
              <BidInputForm
                minBidIncrement={auction?.minimumBidAmount as number}
                currentBid={auction?.currentBidPrice as number}
                goodsId={auction?.goodsId as number}
              />

              <div className="pt-4 border-t">
                <LikeAuctionButton
                  goodsId={auction?.goodsId as number}
                  isLike={true}
                />
                {/* <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                공유하기
              </Button> */}
              </div>
            </CardContent>
          </Card>

          {/* 입찰 기록 섹션  */}
          <BidHistorySection
            auctionId={params.id}
            bidHistory={[
              { user: 'photo_collector', amount: 250000, time: '10분 전' },
              { user: 'vintage_lover', amount: 240000, time: '15분 전' },
              {
                user: 'camera_enthusiast',
                amount: 230000,
                time: '30분 전',
              },
              {
                user: 'film_photographer',
                amount: 220000,
                time: '45분 전',
              },
              { user: 'retro_gear', amount: 210000, time: '1시간 전' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
