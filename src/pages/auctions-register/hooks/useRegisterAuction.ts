import { useMutation } from '@tanstack/react-query';

import type { AuctionRegisterResponse } from '../types/index';
import { registerAuction } from '../apis/registerAuction';

interface UseRegisterAuctionMutationOptions {
  onSuccess?: (data: AuctionRegisterResponse) => void;
  onError?: (error: unknown) => void;
}

export const useRegisterAuctionMutation = (
  options?: UseRegisterAuctionMutationOptions,
) => {
  return useMutation({
    mutationFn: registerAuction,
    onSuccess: (data) => {
      options?.onSuccess?.(data);
      // 예: 등록 후 상세 페이지로 이동 등 가능
    },
    onError: (error) => {
      console.error('[useRegisterAuctionMutation] 실패', error);
      options?.onError?.(error);
    },
  });
};
