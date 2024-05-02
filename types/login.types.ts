import { object, string, z } from 'zod';

export const loginSchema = object({
  email: string({ required_error: 'Email é obrigatório' })
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  password: string({ required_error: 'Senha é obrigatório' })
    .min(1, 'Senha é obrigatório')
    .min(6, 'Senha deve ter no mínimo 6 caractéres')
    .max(32, 'Senha muito longa no máximo 32 caractéres'),
});

export type ILoginSchema = z.infer<typeof loginSchema>;

export const createAccountSchema = z.object({
  name: string().min(1, 'Nome é obrigatório'),
  email: string({ required_error: 'Email é obrigatório' })
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  phone: string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    {
      message: 'O número do celular deve estar (99) 999999999',
    }
  ),
  password: string({ required_error: 'Senha é obrigatório' })
    .min(1, 'Senha é obrigatório')
    .min(6, 'Senha deve ter no mínimo 6 caractéres')
    .max(32, 'Senha muito longa no máximo 32 caractéres'),
});

export type ICreateAccountSchema = z.infer<typeof createAccountSchema>;

export const forgotPassword = z.object({
  email: string().email('Email inválido').min(1, 'Email é obrigatório'),
});

export type IForgotPassword = z.infer<typeof forgotPassword>;
