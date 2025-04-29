interface GetAuctionDetailParams {
  goodsId: number;
}

export async function getAuctionDetail({ goodsId }: GetAuctionDetailParams) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auction/${goodsId}`,
  );

  if (!response.ok) {
    throw new Error('getAuctionDetail 실패');
  }

  return response.json();
}
