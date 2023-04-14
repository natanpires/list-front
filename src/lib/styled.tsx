'use client';

import React, { PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentRegistry({
  children,
}: PropsWithChildren) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    // @ts-ignore
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
