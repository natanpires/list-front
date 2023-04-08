'use client';

import { PropsWithChildren } from 'react';
import { ReduxProvider } from './redux-provider';
import GlobalsCss from '@/app/globals.css';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ReduxProvider>
      <GlobalsCss />
      {children}
    </ReduxProvider>
  );
}
