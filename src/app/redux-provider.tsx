'use client';

import { PropsWithChildren } from 'react';
import ReduxRegistry from '@/lib/redux';

export function ReduxProvider({ children }: PropsWithChildren) {
  return <ReduxRegistry>{children}</ReduxRegistry>;
}
