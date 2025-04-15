import { useFormContext } from 'react-hook-form';

import { TabsContent } from '@/shared/ui';

export default function PreviewStep() {
  const { getValues, watch } = useFormContext();
  const images = watch('images');

  return (
    <TabsContent value="preview" className="space-y-6 mt-6">
      <div className="space-y-6">
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-4 py-3 font-medium">상품 정보</div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">제목</h3>
                <p>{getValues('title') || '제목이 입력되지 않았습니다.'}</p>
              </div>
              <div>
                <h3 className="font-semibold">카테고리</h3>
                <p>
                  {getValues('category')
                    ? {
                        electronics: '전자제품',
                        fashion: '패션',
                        collectibles: '수집품',
                        art: '예술/미술',
                        jewelry: '쥬얼리',
                        home: '홈/리빙',
                        sports: '스포츠/레저',
                      }[getValues('category') as string]
                    : '카테고리가 선택되지 않았습니다.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">상품 상태</h3>
                <p>
                  {getValues('condition')
                    ? {
                        new: '새 상품',
                        'like-new': '거의 새 상품',
                        'used-good': '중고 - 상태 좋음',
                        'used-fair': '중고 - 상태 보통',
                      }[getValues('condition') as string]
                    : '상품 상태가 선택되지 않았습니다.'}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">상세 설명</h3>
              <p className="whitespace-pre-line">
                {getValues('description') || '상세 설명이 입력되지 않았습니다.'}
              </p>
            </div>

            {/* 이미지 미리보기 섹션 */}
            <div>
              <h3 className="font-semibold">상품 이미지</h3>
              {images?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="aspect-square rounded-md overflow-hidden border"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image || '/placeholder.svg'}
                        alt={`상품 이미지 ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>이미지가 등록되지 않았습니다.</p>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-4 py-3 font-medium">가격 정보</div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">시작 가격</h3>
                <p>{getValues('startingPrice')?.toLocaleString() || 0}원</p>
              </div>
              <div>
                <h3 className="font-semibold">경매 기간</h3>
                <p>
                  {getValues('duration')
                    ? `${getValues('duration')}일`
                    : '경매 기간이 선택되지 않았습니다.'}
                </p>
              </div>
              {getValues('enableBuyNow') && (
                <div>
                  <h3 className="font-semibold">즉시 구매 가격</h3>
                  <p>{getValues('buyNowPrice')?.toLocaleString() || 0}원</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-4 py-3 font-medium">배송 정보</div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">배송 방법</h3>
                <p>
                  {getValues('shippingMethod')
                    ? {
                        parcel: '택배',
                        direct: '직거래',
                        both: '택배 및 직거래',
                      }[getValues('shippingMethod') as string]
                    : '배송 방법이 선택되지 않았습니다.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">배송비</h3>
                <p>
                  {getValues('shippingFee') === 0
                    ? '무료 배송'
                    : `${getValues('shippingFee')?.toLocaleString() || 0}원`}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">반품 정책</h3>
                <p>
                  {getValues('returnPolicy')
                    ? {
                        'no-returns': '반품 불가',
                        '7days': '7일 이내 반품 가능 (구매자 부담)',
                        '7days-seller': '7일 이내 반품 가능 (판매자 부담)',
                        '14days': '14일 이내 반품 가능 (구매자 부담)',
                      }[getValues('returnPolicy') as string]
                    : '반품 정책이 선택되지 않았습니다.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
