import { faker } from '@faker-js/faker';

export const generateMockAuctionDetail = (auctionId: number) => {
  const now = Date.now();

  return {
    status: 0,
    message: '성공적으로 불러왔습니다.',
    data: {
      goodsId: auctionId,
      goodsName: faker.commerce.productName(),
      goodsDescription: faker.commerce.productDescription(),
      buyNowPrice: faker.number.int({ min: 100000, max: 3000000 }),
      goodsProcessStatus: faker.helpers.arrayElement([
        'AWARDED',
        'PROGRESS',
        'EXPIRED',
      ]),
      goodsStatus: faker.helpers.arrayElement(['NEW', 'USED']),
      minimumBidAmount: faker.number.int({ min: 1000, max: 50000 }),
      actionEndTime: new Date(
        now + faker.number.int({ min: 1000000, max: 7200000 }),
      ).toISOString(),
      userId: faker.number.int({ min: 1, max: 100 }),
      category: faker.helpers.arrayElement([
        'ELECTRONICS',
        'FASHION',
        'BOOKS',
        'ETC',
      ]),
      currentBidPrice: faker.number.int({ min: 100000, max: 2900000 }),
      imageUrls: [
        faker.image.urlLoremFlickr({
          category: 'technology',
          width: 600,
          height: 400,
        }),
      ],
      isLiked: faker.datatype.boolean(),
    },
  };
};
