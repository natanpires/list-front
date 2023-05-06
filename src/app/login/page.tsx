'use client';

import { Inter } from 'next/font/google';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './login.styles';
import { Button, Form, Input } from '@/components';

const inter = Inter({ subsets: ['latin'] });

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <S.Main>
      <S.LoginWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            label="Email"
            type="email"
            {...register('email', {
              required: true,
            })}
          />
          {errors.email && (
            <span className={inter.className}>This field is required</span>
          )}

          <Input
            id="password"
            type="password"
            label="Password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className={inter.className}>This field is required</span>
          )}

          <Button type="submit" value="submit">
            <span className={inter.className}>login</span>
          </Button>
        </Form>
      </S.LoginWrapper>
    </S.Main>
  );
}
