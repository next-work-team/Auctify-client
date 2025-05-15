import { useEffect, useRef, useState } from 'react';

/**
 * WebSocket 연결을 위한 커스텀 훅
 *
 * @param url - WebSocket 서버 주소 (ws:// 또는 wss://)
 * @param protocols - 선택적 프로토콜 리스트
 * @param onError - 에러 발생 시 실행할 콜백
 *
 * @returns data: 최신 수신 데이터, isConnected: 연결 상태, isLoading: 초기 로딩 상태, sendMessage: 메시지 전송 함수
 */
interface UseWebSocketOptions<T> {
  url: string;
  protocols?: string | string[];
  onError?: (error: Event) => void;
  initialData: T;
}

export function useWebSocket<T = unknown>({
  url,
  protocols,
  onError,
  initialData,
}: UseWebSocketOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url, protocols);
    socketRef.current = socket;

    socket.onopen = () => {
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        setData(parsed as T);
      } catch {
        setData(event.data as unknown as T);
      }
      setIsLoading(false); // 첫 메시지 수신 후 로딩 종료
    };

    socket.onerror = (error) => {
      setIsConnected(false);
      setIsLoading(false);
      onError?.(error);
    };

    socket.onclose = () => {
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, [url, protocols, onError]);

  // 외부에서 메시지 전송 가능하게
  const sendMessage = (message: string | object) => {
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN)
      return;

    const payload =
      typeof message === 'string' ? message : JSON.stringify(message);
    socketRef.current.send(payload);
  };

  return { data, isConnected, isLoading, sendMessage };
}
