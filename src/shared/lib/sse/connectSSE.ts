'use client';

export const connectSSE = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const eventSource = new EventSource(
    `${apiUrl}/api/sse/subscribe/notification`,
  );

  // 서버에서 메시지가 오면 실행됨
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('서버로부터 알림 수신:', data);
    // 예: 알림 UI 업데이트
    // showNotification(data.message);
  };

  // 연결 오류 시 재연결 시도
  eventSource.onerror = () => {
    console.error('SSE 연결 오류, 5초 뒤 재연결 시도');
    setTimeout(() => {
      connectSSE(); // 재연결
    }, 5000); // 5초 후 재연결 시도
  };

  // (선택) 연결 성공 시
  eventSource.onopen = () => {
    console.log('SSE 연결 성공');
  };
};
