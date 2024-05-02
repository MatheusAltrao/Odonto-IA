'use client';
import InputRegister from '@/components/InputRegister';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { signInAction } from '../../actions/login';
import { ILoginSchema, loginSchema } from '../../types/login.types';

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: ILoginSchema) => {
    try {
      await signInAction(data.email, data.password);
      toast({
        variant: 'success',
        title: 'Seja bem-vindo',
        description: 'Use OdontoIA com moderação',
      });
    } catch (error) {
      // console.error('Erro durante o login:', error);
      toast({
        variant: 'destructive',
        title: 'Email ou senha inválido',
        description: 'verifique se inseriu as credenciais corretas',
      });
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>Insira o seu email e senha para utilizar a plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(handleLogin)}
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
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <InputRegister
                name="password"
                type="password"
                error={errors.password?.message}
                register={register}
                placeholder="*******"
              />
            </div>
            <Button
              disabled={isPending}
              type="submit"
              className="w-full"
            >
              Entrar
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
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Esqueceu a senha?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
