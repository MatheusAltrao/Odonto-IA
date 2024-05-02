'use client';
import InputRegister from '@/components/InputRegister';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { IForgotPassword, forgotPassword } from '../../../types/login.types';

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({
    resolver: zodResolver(forgotPassword),
  });

  const handleForgotPassword = (data: IForgotPassword) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Esqueceu a senha?</CardTitle>
          <CardDescription>Insira o seu email que enviaremos um link</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <InputRegister
                name="email"
                type="email"
                placeholder="matheus@example.com"
                error={errors.email?.message}
                register={register}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Envir link
            </Button>
          </form>
          <div className="mt-4 text-center text-sm space-y-2">
            <div>
              Não possui uma conta?{' '}
              <Link
                href="/create-account"
                className="underline"
              >
                Criar conta
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              Já possui uma conta?{' '}
              <Link
                href="/"
                className="underline"
              >
                Entrar
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgetPassword;
