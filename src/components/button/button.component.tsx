'use client';

import React from 'react';
import * as S from './button.styled';
import { ButtonProps } from './button.type';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export { Button };
