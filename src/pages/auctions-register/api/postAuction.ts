interface createAuctionParams {
  userId: number;
  goodsName: string;
  goodsDescription: string;
  category: 'ELECTRONICS';
  minimumBidAmount: number;
  goodsStatus: string;
  goodsProcessStatus: string;
  actionEndTime: Date;
  buyNowPrice: number;
  image: string[];
}

export async function postAuction(payload: createAuctionParams) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auction`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch auction goods list');
  }

  return response.json();
}
