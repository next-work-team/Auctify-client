'use client';

import { PropsWithChildren } from 'react';

import TanstackQueryProvider from './TanstackQueryProvider';

export default function Providers({ children }: PropsWithChildren) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}
