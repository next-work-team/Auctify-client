export async function getMe() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my`, {
    credentials: 'include', // 쿠키 포함 필수
  });

  if (!res.ok) {
    throw new Error('로그인 정보가 없습니다');
  }

  return res.json(); // { id, name, email, ... }
}
