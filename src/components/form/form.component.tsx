'use client';

import React, {
  FormHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from 'react';
import * as S from './form.styled';

const Form = (
  {
    children,
    ...props
  }: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>,
  ref: React.ForwardedRef<HTMLFormElement>
) => {
  return (
    <S.FormWrapper ref={ref} {...props}>
      {children}
    </S.FormWrapper>
  );
};

Form.displayName = 'Form';
export default forwardRef(Form);
