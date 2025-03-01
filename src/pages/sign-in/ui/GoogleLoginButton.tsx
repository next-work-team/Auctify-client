'use client';

import React from 'react';

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href =
      'https://accounts.google.com/o/oauth2/auth?' +
      'client_id=777440464902-90cdjve286mpm9rbs3eh7codssotpmsq.apps.googleusercontent.com&' +
      'redirect_uri=백엔드uri' + // 백엔드 uri 필요
      'response_type=code&' +
      'scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'; //받아올 유저의 정보 범위
  };

  return <button onClick={handleLogin}>구글 로그인</button>;
}
