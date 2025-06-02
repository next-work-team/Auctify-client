export const deletePresignedImage = async (s3Key: string): Promise<void> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/presigned`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ s3Key }),
  });

  if (!res.ok) {
    throw new Error('이미지 삭제 요청 실패');
  }
};
