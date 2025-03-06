'use client';

export default function KakaoLoginButton() {
  const handleKaKaoLogin = async () => {
    window.location.href = `https://api.auctify.shop/oauth2/authorization/kakao`;
  };

  return <button onClick={handleKaKaoLogin}>카카오 로그인</button>;
}
