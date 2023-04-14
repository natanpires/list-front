'use client';

import React from 'react';
import * as S from './anchor.styled';
import { AnchorProps } from './anchor.type';

const Anchor: React.FC<AnchorProps> = ({ children, ...props }) => {
  return <S.Anchor {...props}>{children}</S.Anchor>;
};

export { Anchor };
