'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { Button, Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { Form } from '@/shared/ui/form';

import { auctionRegisterFormSchema } from '../../schemas/AuctionRegisterForm.schema';
import { useRegisterAuctionMutation } from '../../hooks/useRegisterAuction';

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

  const { mutate, isPending } = useRegisterAuctionMutation({
    onSuccess: (res) => {
      console.log('🚀 ~ AuctionRegisterForm ~ res:', res);
      alert('경매 등록에 성공했습니다.');
      // TODO toast.success('경매가 성공적으로 등록되었습니다!');
      // TODO router.push(`/auction/${res.data.goodsId}`);
    },
    onError: (err) => {
      alert('경매 등록에 실패했습니다.');
      // TODO toast.error('경매 등록에 실패했습니다.');
    },
  });

  async function onSubmit(values: z.infer<typeof auctionRegisterFormSchema>) {
    const payload = {
      userId: 1, // TODO: 로그인 유저 ID 주입
      goodsName: values.title,
      goodsDescription: values.description,
      category: values.category.toUpperCase(), // ENUM 형식 맞게 처리
      minimumBidAmount: values.startingPrice,
      goodsStatus: 'NEW',
      goodsProcessStatus: 'ONGOING',
      actionEndTime: new Date(
        Date.now() + parseInt(values.duration) * 60 * 60 * 1000,
      ).toISOString(),
      buyNowPrice: values.enableBuyNow ? (values.buyNowPrice ?? 0) : 0,
      image: values.images.map((file) =>
        typeof file === 'string' ? file : URL.createObjectURL(file),
      ),
    };

    mutate(payload);
  }

  const getTabByField = (field: string) => {
    const basicFields = [
      'title',
      'description',
      'category',
      'condition',
      'images',
    ];
    const pricingFields = [
      'startingPrice',
      'enableBuyNow',
      'buyNowPrice',
      'duration',
    ];
    const shippingFields = ['shippingMethod', 'shippingFee', 'returnPolicy'];

    if (basicFields.includes(field)) return 'basic';
    if (pricingFields.includes(field)) return 'pricing';
    if (shippingFields.includes(field)) return 'shipping';
    return 'preview';
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = await form.trigger();

    if (!isValid) {
      const errorFields = Object.keys(
        form.formState.errors,
      ) as (keyof typeof form.formState.errors)[];
      const firstInvalidTab = getTabByField(errorFields[0]);
      setActiveTab(firstInvalidTab);

      return;
    }
  };

  const validateCurrentStep = async () => {
    if (activeTab === 'basic') {
      return await form.trigger([
        'title',
        'description',
        'category',
        'condition',
        'images',
      ]);
    }
    if (activeTab === 'pricing') {
      return await form.trigger(['startingPrice', 'buyNowPrice', 'duration']);
    }
    if (activeTab === 'shipping') {
      return await form.trigger([
        'shippingMethod',
        'shippingFee',
        'returnPolicy',
      ]);
    }
    return true;
  };

  const nextStep = async () => {
    const valid = await validateCurrentStep();
    if (!valid) return;

    if (activeTab === 'basic') setActiveTab('pricing');
    else if (activeTab === 'pricing') setActiveTab('shipping');
    else if (activeTab === 'shipping') setActiveTab('preview');
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

          <div className="w-full pt-4 relative">
            <div className="flex w-full justify-between text-xl fixed left-0 bottom-0 sm:relative">
              {activeTab !== 'basic' && (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-none sm:rounded"
                  onClick={prevStep}
                >
                  <ArrowLeftIcon />
                  이전
                </Button>
              )}

              {activeTab !== 'preview' ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-full rounded-none sm:rounded"
                >
                  다음
                  <ArrowRightIcon />
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={() => onSubmit(form.getValues())}
                  className="w-full"
                >
                  {isPending ? '등록중...' : '경매 등록하기'}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </Tabs>
  );
}
