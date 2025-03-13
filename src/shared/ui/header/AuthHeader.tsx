import React from 'react';
import AutifyLogo from '@icons/auctifyLogo32x32.svg';
import { UserRound } from 'lucide-react';
import { Bell } from 'lucide-react';

import { Search } from './Search';

export function AuthHeader() {
  return (
    <header className="flex items-center">
      <div>
        <AutifyLogo width={32} height={32} />
      </div>
      <div>
        <Search />
      </div>
      <button className="flex items-center">
        <Bell />
        <UserRound />
      </button>
    </header>
  );
}
