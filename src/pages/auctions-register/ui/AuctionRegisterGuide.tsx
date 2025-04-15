import { CalendarIcon, ClockIcon, ImagePlusIcon, InfoIcon } from 'lucide-react';

import { Card, CardContent } from '@/shared/ui';

export default function AuctionRegisterGuide() {
  return (
    <aside className="sticky top-20">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">경매 등록 가이드</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-base text-foreground flex items-center gap-2">
                  <InfoIcon className="h-5 w-5 text-muted-foreground" />
                  상세한 설명을 작성하세요.
                </p>
                <p className="mt-2">
                  상품의 특징, 사용 기간, 하자 여부 등 자세한 정보를 제공할수록
                  구매자의 신뢰를 얻을 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-base text-foreground flex items-center gap-2">
                  <ImagePlusIcon className="h-5 w-5 text-muted-foreground" />
                  선명한 이미지를 업로드하세요.
                </p>
                <p className="mt-2">
                  다양한 각도에서 촬영한 선명한 이미지는 상품의 상태를 정확히
                  보여줍니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-base text-foreground flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-muted-foreground" />
                  적절한 경매 기간을 설정하세요.
                </p>
                <p className="mt-2">
                  너무 짧으면 충분한 입찰을 받지 못할 수 있고, 너무 길면 관심이
                  분산될 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-base text-foreground flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  적정 가격을 설정하세요.
                </p>
                <p className="mt-2">
                  시작 가격이 너무 높으면 입찰자의 관심을 끌기 어렵습니다.
                  합리적인 시작 가격으로 경쟁을 유도하세요.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
