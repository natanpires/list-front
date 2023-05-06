'use client';

import React from 'react';
import * as S from './anchor.styled';

const Anchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return <S.Anchor {...props}>{children}</S.Anchor>;
};

export default Anchor;
