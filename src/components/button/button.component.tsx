'use client';

import React, { forwardRef } from 'react';
import * as S from './button.styled';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return (
    <S.Button ref={ref} {...props}>
      {children}
    </S.Button>
  );
});

Button.displayName = 'Button';
export default Button;
