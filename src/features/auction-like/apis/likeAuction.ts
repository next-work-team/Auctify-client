export const likeAuction = async (
  goodsId: number,
): Promise<{
  status: number;
  message: string;
  data: string;
}> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auction/like`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        goodsId,
        like: 'like',
      }),
    },
  );

  if (!response.ok) {
    throw new Error('좋아요 요청 실패');
  }

  return response.json();
};
