'use client';

import styled from 'styled-components';
import { sketchCss } from '@/styles/sketch';

export const InputWrapper = styled.div`
  position: relative;
  align-items: center;
  width: 100%;

  cursor: text;

  ${sketchCss}

  & > input:invalid {
    border: none;
    outline: 1px solid red;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  line-height: 2;
  padding: 0 20px;
`;
