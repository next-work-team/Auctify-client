import React from 'react';
import AutifyLogo from '@icons/auctifyLogo32x32.svg';

import { Search } from './Search';

export function Header() {
  return (
    <header className="flex">
      <div>
        <AutifyLogo width={32} height={32} />
      </div>
      <div>
        <Search />
      </div>
      <div></div>
    </header>
  );
}
