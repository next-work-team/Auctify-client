/* eslint-disable @typescript-eslint/no-explicit-any */
import { fakerKO as faker } from '@faker-js/faker';

import { Auction } from '@/entities/auctions';

export function generateAuctionList(
  page: number,
  size: number,
): Promise<{
  status: number;
  message: string;
  data: {
    totalElements: number;
    totalPages: number;
    pageable: any;
    numberOfElements: number;
    size: number;
    content: Auction[];
    number: number;
    sort: any;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
}> {
  const totalElements = 87;
  const totalPages = Math.ceil(totalElements / size);
  const content: Auction[] = Array.from({ length: size }, (_, i) => ({
    goodsId: page * size + i,
    goodsName: faker.commerce.productName(),
    goodsProcessStatus: faker.helpers.arrayElement([
      'AWARDED',
      'BIDDING',
      'CLOSED',
    ]),
    currentBidPrice: parseInt(faker.commerce.price({ min: 1000, max: 100000 })),
    imageUrls: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
    endTime: faker.date.soon({ days: 5 }).toISOString(),
    category: faker.helpers.arrayElement([
      'ELECTRONICS',
      'FASHION',
      'BOOKS',
      'FURNITURE',
    ]),
    goodsStatus: faker.helpers.arrayElement(['NEW', 'USED']),
    currentBidCount: faker.number.int({ min: 0, max: 100 }),
    isLiked: faker.datatype.boolean(),
  }));

  return Promise.resolve({
    status: 0,
    message: '성공적으로 데이터를 가져왔습니다.',
    data: {
      totalElements,
      totalPages,
      pageable: {
        paged: true,
        pageNumber: page,
        pageSize: size,
        unpaged: false,
        offset: page * size,
        sort: {
          unsorted: true,
          sorted: false,
          empty: true,
        },
      },
      numberOfElements: content.length,
      size,
      content,
      number: page,
      sort: {
        unsorted: true,
        sorted: false,
        empty: true,
      },
      first: page === 0,
      last: page === totalPages - 1,
      empty: content.length === 0,
    },
  });
}
