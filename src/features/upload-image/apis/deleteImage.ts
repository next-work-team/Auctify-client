import { BACKEND_URL } from '@/shared/constants';

export const deleteImage = async (s3Key: string): Promise<void> => {
  const res = await fetch(`${BACKEND_URL}/presigned`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ s3Key }),
  });

  if (!res.ok) {
    throw new Error('이미지 삭제 실패');
  }
};
