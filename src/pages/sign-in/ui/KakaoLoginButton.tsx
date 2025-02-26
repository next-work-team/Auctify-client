'use client';

export default function KakaoLoginButton() {
  const handleKaKaoLogin = async () => {
    const response = fetch(
      'http://13.209.35.247:8080/oauth2/authorization/kakao',
    );
    const result = await response;

    console.log(result);
  };

  return <button onClick={handleKaKaoLogin}>카카오 로그인</button>;
}
