import { z } from 'zod';

export const auctionRegisterFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: '제목은 최소 5자 이상이어야 합니다.',
    })
    .max(100, {
      message: '제목은 최대 100자까지 입력 가능합니다.',
    }),

  description: z
    .string()
    .min(20, {
      message: '설명은 최소 20자 이상이어야 합니다.',
    })
    .max(2000, {
      message: '설명은 최대 2000자까지 입력 가능합니다.',
    }),

  category: z.string().min(1, {
    message: '카테고리를 선택해주세요.',
  }),

  condition: z.string().min(1, {
    message: '상품 상태를 선택해주세요.',
  }),

  images: z
    .array(z.string())
    .min(1, { message: '최소 1장의 이미지를 업로드해야 합니다.' })
    .max(8, { message: '최대 8장의 이미지만 업로드할 수 있습니다.' }),

  startingPrice: z.coerce.number().min(1000, {
    message: '시작 가격은 최소 1,000원 이상이어야 합니다.',
  }),

  buyNowPrice: z.coerce.number().optional(),

  enableBuyNow: z.boolean().default(false),

  duration: z.string().min(1, {
    message: '경매 기간을 선택해주세요.',
  }),

  shippingMethod: z.string().min(1, {
    message: '배송 방법을 선택해주세요.',
  }),

  shippingFee: z.coerce.number().min(0, {
    message: '배송비는 0원 이상이어야 합니다.',
  }),

  returnPolicy: z.string().min(1, {
    message: '반품 정책을 선택해주세요.',
  }),
});
