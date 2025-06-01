'use client';

import KakaoIcon from '@icons/kakao.svg';

import { Button } from '@/shared/ui';

export default function KakaoLoginButton() {
  const openKakaoLoginPopup = () => {
    const popup = window.open(
      'https://api.auctify.shop/oauth2/authorization/kakao?popup=true',
      'kakaoLogin',
      'width=500,height=600,noopener=no', // 👈 반드시 noopener 제거
    );

    if (!popup) {
      console.warn('🚫 팝업 차단됨');
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      // if (event.origin !== 'https://api.auctify.shop'/) {
      //   console.warn('❌ 허용되지 않은 origin:', event.origin);
      //   return;
      // }

      console.log('📬 메시지 수신:', event.data);

      if (event.data.type === 'OAUTH_SUCCESS') {
        const redirectTo = event.data.redirectTo || '/';
        console.log('✅ 리디렉션 경로:', redirectTo);

        window.location.assign(redirectTo); // ✅ 전체 페이지 새로고침 방식으로 전환
        window.removeEventListener('message', handleMessage); // 여기서 제거
      }
    };

    window.addEventListener('message', handleMessage);

    // 선택: 창 닫힘 감시 → 리스너는 제거하지 않고 단순히 상태 확인만
    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        console.log('ℹ️ 팝업 창 닫힘 감지');
      }
    }, 500);
  };

  return (
    <Button variant="outline" onClick={openKakaoLoginPopup} size="full">
      <KakaoIcon className="w-6 h-6" />
      카카오 로그인
    </Button>
  );
}
