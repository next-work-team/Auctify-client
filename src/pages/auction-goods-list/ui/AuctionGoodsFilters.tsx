'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';
import { Slider } from '@/shared/ui/Slider';

export default function AuctionGoodsFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-card rounded-lg border p-4">
      {/* <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="md:hidden mb-4"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="flex w-full justify-between p-0 h-auto"
          >
            <span className="font-semibold">필터</span>
            <span className="text-xs">{isOpen ? '접기' : '펼치기'}</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <FilterContent
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </CollapsibleContent>
      </Collapsible> */}

      <div className="hidden md:block">
        <h3 className="font-semibold mb-4">필터</h3>
        <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>
    </div>
  );
}

function FilterContent({
  priceRange,
  setPriceRange,
}: {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  return (
    <Accordion
      type="multiple"
      defaultValue={['category', 'price', 'condition', 'status']}
    >
      <AccordionItem value="category">
        <AccordionTrigger>카테고리</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="electronics" />
              <Label htmlFor="electronics" className="text-sm font-normal">
                전자제품
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="fashion" />
              <Label htmlFor="fashion" className="text-sm font-normal">
                패션
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="collectibles" />
              <Label htmlFor="collectibles" className="text-sm font-normal">
                수집품
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="art" />
              <Label htmlFor="art" className="text-sm font-normal">
                예술/미술
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="jewelry" />
              <Label htmlFor="jewelry" className="text-sm font-normal">
                쥬얼리
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="home" />
              <Label htmlFor="home" className="text-sm font-normal">
                홈/리빙
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sports" />
              <Label htmlFor="sports" className="text-sm font-normal">
                스포츠/레저
              </Label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="price">
        <AccordionTrigger>가격 범위</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <Slider
              defaultValue={[0, 1000000]}
              max={1000000}
              step={10000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex items-center justify-between">
              <div className="w-[45%]">
                <Label htmlFor="min-price" className="text-xs">
                  최소
                </Label>
                {/* <Input
                  id="min-price"
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([
                      Number.parseInt(e.target.value),
                      priceRange[1],
                    ])
                  }
                  className="h-8"
                /> */}
              </div>
              <span className="text-muted-foreground">-</span>
              <div className="w-[45%]">
                <Label htmlFor="max-price" className="text-xs">
                  최대
                </Label>
                {/* <Input
                  id="max-price"
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="h-8"
                /> */}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="condition">
        <AccordionTrigger>상품 상태</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="new" />
              <Label htmlFor="new" className="text-sm font-normal">
                새 상품
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="like-new" />
              <Label htmlFor="like-new" className="text-sm font-normal">
                거의 새 상품
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="used-good" />
              <Label htmlFor="used-good" className="text-sm font-normal">
                중고 - 상태 좋음
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="used-fair" />
              <Label htmlFor="used-fair" className="text-sm font-normal">
                중고 - 상태 보통
              </Label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="status">
        <AccordionTrigger>경매 상태</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="ending-soon" />
              <Label htmlFor="ending-soon" className="text-sm font-normal">
                종료 임박 (24시간 이내)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="newly-listed" />
              <Label htmlFor="newly-listed" className="text-sm font-normal">
                최근 등록 (24시간 이내)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="hot-items" />
              <Label htmlFor="hot-items" className="text-sm font-normal">
                인기 경매 (10건 이상 입찰)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="buy-now" />
              <Label htmlFor="buy-now" className="text-sm font-normal">
                즉시 구매 가능
              </Label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="seller">
        <AccordionTrigger>판매자</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              {/* <Input placeholder="판매자 검색" className="pl-8" /> */}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="verified-seller" />
                <Label
                  htmlFor="verified-seller"
                  className="text-sm font-normal"
                >
                  인증된 판매자
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="top-rated" />
                <Label htmlFor="top-rated" className="text-sm font-normal">
                  최상위 등급 판매자
                </Label>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
