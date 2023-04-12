'use client';

import { PropsWithChildren } from 'react';
import ReduxRegistry from '@/lib/redux';
import GlobalsCss from '@/app/globals.css';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ReduxRegistry>
      <GlobalsCss />
      {children}
    </ReduxRegistry>
  );
}
