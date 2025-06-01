export async function getMe() {
  console.log('쿠키 포함 여부 테스트 시작');

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my`, {
    credentials: 'include',
  });
  console.log('응답 상태:', res.status);
  console.log('Set-Cookie 응답 헤더:', res.headers.get('Set-Cookie'));
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  const data = await res.json();
  console.log('응답 데이터:', data);
  return data;
}
