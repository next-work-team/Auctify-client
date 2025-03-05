'use client';

import React from 'react';

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href =
      'http://13.209.35.247:8080/oauth2/authorization/google';
  };

  return <button onClick={handleLogin}>구글 로그인</button>;
}
