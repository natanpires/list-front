'use client';

import { PropsWithChildren } from 'react';
import ReduxRegistry from '@lib/redux';
import GlobalsStyle from '@app/globals.styled';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ReduxRegistry>
      <GlobalsStyle />
      {children}
    </ReduxRegistry>
  );
}
