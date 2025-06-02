'use client';
import GoogleIcon from '@icons/google.svg';

import { Button } from '@/shared/ui';

export default function GoogleLoginButton() {
  const openGoogleLoginPopup = () => {
    const popup = window.open(
      'https://api.auctify.shop/oauth2/authorization/google?popup=true',
      'googleLogin',
      'width=500,height=600,noopener=no', // 반드시 noopener 제거
    );

    if (!popup) {
      console.warn('🚫 팝업 차단됨');
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      // 안전한 경우 origin 체크 추가 가능
      // if (event.origin !== 'https://api.auctify.shop'/) return;

      console.log('📬 메시지 수신 (google):', event.data);

      if (event.data.type === 'OAUTH_SUCCESS') {
        const redirectTo = event.data.redirectTo || '/';
        console.log('✅ 리디렉션 경로:', redirectTo);

        window.location.assign(redirectTo); // ✅ 전체 페이지 새로고침 방식으로 전환
        window.removeEventListener('message', handleMessage); // 여기서 제거
      }
    };

    window.addEventListener('message', handleMessage);

    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        console.log('ℹ️ 팝업 창 닫힘 감지 (google)');
      }
    }, 500);
  };

  return (
    <Button variant="outline" onClick={openGoogleLoginPopup} size="lg">
      <GoogleIcon className="w-5 h-5" />
      구글 로그인
    </Button>
  );
}
