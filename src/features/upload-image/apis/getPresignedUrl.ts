import { BACKEND_URL } from '@/shared/constants';

import { PresignedResponse } from '../model';

export const getPresignedUrl = async (
  imageName: string,
): Promise<PresignedResponse> => {
  const res = await fetch(`${BACKEND_URL}/presigned`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageName }),
  });

  if (!res.ok) {
    throw new Error('Presigned URL 요청 실패');
  }

  return res.json();
};
