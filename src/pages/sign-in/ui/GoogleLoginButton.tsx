'use client';

import React from 'react';

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href =
      'http://ec2-13-209-35-247.ap-northeast-2.compute.amazonaws.com:8080/';
  };

  return <button onClick={handleLogin}>구글 로그인</button>;
}
