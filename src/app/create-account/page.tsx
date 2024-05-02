'use client';
import InputRegister from '@/components/InputRegister';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { createAcountAction } from '../../../actions/create-account';
import { ICreateAccountSchema, createAccountSchema } from '../../../types/login.types';

const CreateAccount = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
  });

  const handleCreateUser = (data: ICreateAccountSchema) => {
    startTransition(() => {
      createAcountAction(data).then((result) => {
        if (result.error) {
          toast({
            title: 'Error',
            description: result.error,
          });
        } else {
          toast({
            title: 'Success',
            description: result.success,
          });
          router.replace('/');
        }
      });
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-xl">Criar conta</CardTitle>
          <CardDescription>Insira as suas informações para criarmos a sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(handleCreateUser)}
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Nome Completo</Label>
              <InputRegister
                name="name"
                type="string"
                placeholder="Matheus Altrão"
                error={errors.name?.message}
                register={register}
              />
            </div>
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
              <Label htmlFor="phone">Phone</Label>
              <InputRegister
                name="phone"
                type="string"
                error={errors.phone?.message}
                register={register}
                placeholder="99 999999999"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
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
              Criar conta
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Já possui uma conta?{' '}
            <Link
              href="/"
              className="underline"
            >
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateAccount;
