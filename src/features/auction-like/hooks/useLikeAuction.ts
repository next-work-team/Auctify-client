import { useMutation } from '@tanstack/react-query';

import { likeAuction } from '../apis/likeAuction';

export const useLikeAuction = () => {
  return useMutation({
    mutationFn: likeAuction,
  });
};
