import { useMutation } from '@tanstack/react-query';

import { unlikeAuction } from '../apis/unlikeAuction';

export const useUnlikeAuction = () => {
  return useMutation({
    mutationFn: unlikeAuction,
  });
};
