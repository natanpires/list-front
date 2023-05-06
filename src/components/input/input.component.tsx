'use client';

import React, { forwardRef } from 'react';

import * as S from './input.styled';

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
>((props, ref) => {
  return (
    <>
      <S.InputWrapper>
        <label htmlFor={props.id} style={{ cursor: 'text' }}>
          {props.label}
        </label>
        <S.Input ref={ref} {...props} />
      </S.InputWrapper>
    </>
  );
});

Input.displayName = 'Input';
export default Input;
