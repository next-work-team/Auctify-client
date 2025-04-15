'use client';

import { useState } from 'react';
import { Check, Clock, Package, CreditCard } from 'lucide-react';

import { Button, CardContent } from '@/shared/ui';
import { Card } from '@/shared/ui';

import HomeNavLink from '../../auctions-detail/ui/HomeNavLink';

/**
 * 낙찰 완료 페이지 컴포넌트
 * @param params - 경매 상품 ID를 포함하는 객체
 */
export function AuctionsWinPage({ params }: { params: { id: string } }) {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // 낙찰 정보 mock 데이터
  const winningBid = {
    id: params.id,
    title: '빈티지 카메라 컬렉션',
    image:
      'https://images.unsplash.com/reserve/HwHDcyQARvK6rFF84VT8_15154010855_3ac36f3e56_o.jpg?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    finalBid: 250000,
    winningTime: '2023년 5월 15일 14:30',
    seller: {
      name: '카메라마스터',
      rating: 4.9,
    },
    paymentDeadline: '2023년 5월 17일 14:30',
    shippingOptions: [
      { id: 1, name: '일반 배송', price: 3000, days: '3-5일' },
      { id: 2, name: '빠른 배송', price: 5000, days: '1-2일' },
    ],
  };

  const steps = [
    { id: 1, name: '낙찰 확인', icon: Check },
    { id: 2, name: '결제 정보', icon: CreditCard },
    { id: 3, name: '배송 정보', icon: Package },
  ];

  return (
    <div className="container py-6 md:py-10">
      <HomeNavLink />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">경매 낙찰 완료</h1>
        <p className="text-muted-foreground">
          축하합니다! 경매 상품의 최종 낙찰자가 되셨습니다.
        </p>
      </div>

      {/* 진행 단계 표시 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= step.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <span
                className={
                  currentStep >= step.id
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }
              >
                {step.name}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-24 md:w-32 lg:w-40 mt-5 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {/* 낙찰 상품 정보 */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">낙찰 상품 정보</h2>
              <div className="flex gap-4">
                <img
                  src={winningBid.image}
                  alt={winningBid.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium">{winningBid.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    판매자: {winningBid.seller.name}
                  </p>
                  <p className="font-semibold">
                    낙찰가: ₩{winningBid.finalBid.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 결제 정보 입력 폼 (currentStep이 2일 때만 표시) */}
          {currentStep === 2 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">결제 정보</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      카드 번호
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        만료일
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="000"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 배송 정보 입력 폼 (currentStep이 3일 때만 표시) */}
          {currentStep === 3 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">배송 정보</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      받는 사람
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="이름"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      연락처
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      주소
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md mb-2"
                      placeholder="우편번호"
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md mb-2"
                      placeholder="기본 주소"
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="상세 주소"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      배송 방법
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      {winningBid.shippingOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name} (₩{option.price.toLocaleString()}) -
                          {option.days}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          {/* 낙찰 요약 정보 */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">낙찰 요약</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">낙찰 시간</span>
                  <span>{winningBid.winningTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">낙찰가</span>
                  <span>₩{winningBid.finalBid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">배송비</span>
                  <span>₩3,000</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>총 결제 금액</span>
                  <span>₩{(winningBid.finalBid + 3000).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 결제 기한 안내 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">결제 기한</h3>
                  <p className="text-sm text-muted-foreground">
                    {winningBid.paymentDeadline}까지 결제를 완료해주세요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 다음 단계 버튼 */}
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                이전
              </Button>
            )}
            {currentStep < steps.length ? (
              <Button
                className="flex-1"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                다음
              </Button>
            ) : (
              <Button className="flex-1">결제 완료</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
