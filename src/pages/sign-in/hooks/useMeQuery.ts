import { useQuery } from '@tanstack/react-query';

import { getMe } from '../services/getMe';

export function useMeQuery() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    staleTime: 5 * 60 * 1000,
  });
}
