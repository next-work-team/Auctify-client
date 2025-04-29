import { MessageSquare } from 'lucide-react';

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui';

export default function AuctionGoodsDescriptionSection({
  description,
  seller,
}: {
  description: string;
  seller: {
    name: string;
    rating: number;
    sales: number;
  };
}) {
  return (
    <section>
      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">상세 설명</TabsTrigger>
          <TabsTrigger value="seller">판매자 정보</TabsTrigger>
          <TabsTrigger value="shipping">배송 및 반품</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="p-4 border rounded-lg mt-2">
          <h3 className="text-lg font-semibold mb-2">상품 설명</h3>
          <p className="text-muted-foreground">{description}</p>

          <h4 className="text-md font-semibold mt-4 mb-2">상품 상태</h4>
          <p className="text-muted-foreground">
            모든 카메라는 작동 상태이며, 일부 사용감이 있습니다. 각 카메라의
            상세 상태는 이미지를 참고해주세요.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-2">포함 내용</h4>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Leica M3 (1960년대)</li>
            <li>Canon AE-1 (1970년대)</li>
            <li>Nikon FM2 (1980년대)</li>
            <li>각 카메라별 기본 렌즈</li>
            <li>보관용 케이스</li>
          </ul>
        </TabsContent>
        <TabsContent value="seller" className="p-4 border rounded-lg mt-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold">
              {seller.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{seller.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>평점: {seller.rating}/5.0</span>
                <span>•</span>
                <span>판매 {seller.sales}건</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground">
            빈티지 카메라 전문 판매자입니다. 10년 이상의 경력을 가지고 있으며,
            모든 제품은 전문가가 검수한 후 판매됩니다.
          </p>
          <Button variant="outline" className="mt-4">
            <MessageSquare className="mr-2 h-4 w-4" />
            판매자에게 문의하기
          </Button>
        </TabsContent>
        <TabsContent value="shipping" className="p-4 border rounded-lg mt-2">
          <h3 className="text-lg font-semibold mb-2">배송 정보</h3>
          <p className="text-muted-foreground mb-4">
            모든 상품은 안전하게 포장되어 배송됩니다. 배송은 낙찰 후 결제 완료
            시점으로부터 1-3일 내에 이루어집니다.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-2">반품 정책</h4>
          <p className="text-muted-foreground">
            상품 수령 후 24시간 이내에 상품 상태에 문제가 있을 경우에만 반품이
            가능합니다. 반품 시 발생하는 배송비는 구매자 부담입니다. 단, 상품
            설명과 현저히 다른 경우 판매자 부담으로 반품이 가능합니다.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
