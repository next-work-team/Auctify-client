'use client';
import GoogleIcon from '@icons/google.svg';

import { Button } from '@/shared/ui';

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href =
      'https://api.auctify.shop/oauth2/authorization/google';
  };

  return (
    <Button variant="outline" onClick={handleLogin} size="lg">
      <GoogleIcon className="w-5 h-5" />
      구글 로그인
    </Button>
  );
}
