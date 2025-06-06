import { useEffect, useState } from 'react';

/**
 * SSE 연결을 위한 커스텀 훅
 *
 * @param url - SSE를 수신할 서버 주소
 * @param withCredentials - 쿠키 등 인증 정보 포함 여부
 * @param onError - 에러 발생 시 실행할 콜백
 *
 * @returns @returns data: 최신 수신 데이터, isConnected: SSE 연결 상태, isLoading: 데이터 수신 전 로딩 상태
 */
interface UseSSEOptions<T> {
  url: string;
  withCredentials?: boolean;
  onError?: (error: Event) => void;
  initialData: T | null;
}

export function useSSE<T = unknown>({
  url,
  withCredentials = false,
  onError,
  initialData,
}: UseSSEOptions<T>) {
  // 최신 수신된 데이터를 저장
  const [data, setData] = useState<T | null>(initialData);

  // 현재 SSE 연결 상태
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // EventSource 인스턴스 생성 (SSE 연결 시작)
    const eventSource = new EventSource(url, { withCredentials: true });

    // 연결이 성공적으로 열렸을 때 호출
    eventSource.onopen = () => {
      console.log('✅ SSE 연결 성공:', url);
      setIsConnected(true);
    };

    // 서버로부터 메시지를 수신할 때마다 호출
    eventSource.onmessage = (event) => {
      try {
        // JSON 형식이면 파싱해서 저장
        const parsed = JSON.parse(event.data);
        console.log(event.data);
        setData(parsed as T);
      } catch {
        // 문자열 형식일 경우 그대로 저장 (fallback)
        setData(event.data as unknown as T);
      }
      setIsLoading(false); // 첫 데이터 수신 시 로딩 종료
    };

    // 에러 발생 시 연결 종료 및 콜백 실행
    eventSource.onerror = (error) => {
      setIsConnected(false);
      setIsLoading(false); // 에러 발생 시 로딩 종료
      onError?.(error);
      eventSource.close();
    };

    // 컴포넌트 언마운트 시 연결 종료
    return () => {
      eventSource.close();
    };
  }, [onError, url, withCredentials]);

  // 수신된 데이터와 연결 상태를 반환
  return { data, isConnected, isLoading };
}
