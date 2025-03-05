'use client';

import React from 'react';

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href = 'https://auctify.kro.kr/oauth2/authorization/google';
  };

  return <button onClick={handleLogin}>구글 로그인</button>;
}
