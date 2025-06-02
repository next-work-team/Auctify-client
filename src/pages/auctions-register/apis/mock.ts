import { faker } from '@faker-js/faker';

import { AuctionRegisterRequest, AuctionRegisterResponse } from '../types';

export const generateMockRegisterAuction = (
  data: AuctionRegisterRequest,
): AuctionRegisterResponse => {
  return {
    status: 200,
    message: 'mock 등록 성공',
    data: {
      goodsId: faker.number.int({ min: 1000, max: 9999 }),
      goodsName: data.goodsName,
      goodsDescription: data.goodsDescription,
      buyNowPrice: data.buyNowPrice,
      goodsProcessStatus: 'AWARDED',
      goodsStatus: 'NEW',
      minimumBidAmount: data.minimumBidAmount,
      actionEndTime: data.actionEndTime,
      userId: data.userId,
      category: data.category,
      currentBidPrice: 0,
      imageUrls: data.image.map((_) => faker.image.url()),
      isLiked: false,
    },
  };
};
