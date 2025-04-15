'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { Form } from '@/shared/ui/form';

import { auctionRegisterFormSchema } from '../../schemas/AuctionRegisterForm.schema';

import BasicInfoStep from './BasicInfoStep';
import PriceSettingStep from './PriceSettingStep';
import ShippingInfoStep from './ShippingInfoStep';
import PreviewStep from './PreviewStep';

export default function AuctionRegisterForm() {
  const [activeTab, setActiveTab] = useState('basic');

  const form = useForm<z.infer<typeof auctionRegisterFormSchema>>({
    resolver: zodResolver(auctionRegisterFormSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      condition: '',
      images: [],
      startingPrice: 1000,
      enableBuyNow: false,
      buyNowPrice: undefined,
      duration: '',
      shippingMethod: '',
      shippingFee: 0,
      returnPolicy: '',
    },
    mode: 'all', // 기본적으로 모든 이벤트에서 유효성 검사 실행
  });

  async function onSubmit(values: z.infer<typeof auctionRegisterFormSchema>) {
    console.log('폼 제출 성공:', values);

    // TODO 성공 토스트

    // TODO 리스트 페이지 이동
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사 실행
    const result = await form.trigger();

    if (!result) {
      // 유효성 검사 실패 시 오류가 있는 첫 번째 탭으로 이동
      const errors = form.formState.errors;

      // 각 탭별로 오류가 있는지 확인
      if (
        errors.title ||
        errors.description ||
        errors.category ||
        errors.condition ||
        errors.images
      ) {
        // 기본 탭에 오류가 있으면 해당 탭으로 이동
        setActiveTab('basic');
      } else if (
        errors.startingPrice ||
        errors.buyNowPrice ||
        errors.duration
      ) {
        // 가격 탭에 오류가 있으면 해당 탭으로 이동
        setActiveTab('pricing');
      } else if (
        errors.shippingMethod ||
        errors.shippingFee ||
        errors.returnPolicy
      ) {
        setActiveTab('shipping');
      }
    } else {
      // 유효성 검사 통과 시 폼 제출
      onSubmit(form.getValues());
    }
  };

  const nextStep = () => {
    if (activeTab === 'basic') {
      setActiveTab('pricing');
    } else if (activeTab === 'pricing') {
      setActiveTab('shipping');
    } else if (activeTab === 'shipping') {
      setActiveTab('preview');
    }
  };

  const prevStep = () => {
    if (activeTab === 'pricing') {
      setActiveTab('basic');
    } else if (activeTab === 'shipping') {
      setActiveTab('pricing');
    } else if (activeTab === 'preview') {
      setActiveTab('shipping');
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="basic">기본 정보</TabsTrigger>
        <TabsTrigger value="pricing">가격 설정</TabsTrigger>
        <TabsTrigger value="shipping">배송 정보</TabsTrigger>
        <TabsTrigger value="preview">미리보기</TabsTrigger>
      </TabsList>

      <Form {...form}>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* 기본 정보 폼 */}
          <BasicInfoStep />

          {/* 가격 설정 폼 */}
          <PriceSettingStep />

          {/* 배송정보 폼 */}
          <ShippingInfoStep />

          {/* 폼 미리보기 */}
          <PreviewStep />

          <div className="flex justify-between pt-4">
            {activeTab !== 'basic' && (
              <Button type="button" variant="outline" onClick={prevStep}>
                이전
              </Button>
            )}

            {activeTab !== 'preview' ? (
              <Button type="button" onClick={nextStep}>
                다음
              </Button>
            ) : (
              <Button type="submit">경매 등록하기</Button>
            )}
          </div>
        </form>
      </Form>
    </Tabs>
  );
}
