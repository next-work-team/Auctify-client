export async function getPresignedUrl(imageName: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/presigned`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageName }),
  });

  if (!response.ok) {
    throw new Error('Presigned URL 요청 실패');
  }

  return response.json(); // { presignedUrl: string, s3Key: string }
}
