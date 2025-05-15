import { useQuery } from '@tanstack/react-query';

import { getMe } from '../api/getMe';

export function useMeQuery() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    staleTime: 5 * 60 * 1000,
  });
}
