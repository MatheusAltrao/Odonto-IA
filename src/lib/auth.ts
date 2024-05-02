import { prismaClient } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginSchema } from '../../types/login.types';
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email' },
        password: { label: 'password' },
      },
      authorize: async (credentials) => {
        const schema = loginSchema.safeParse(credentials);

        if (!schema.success) {
          console.error('Validation failed:', schema.error.formErrors);
          throw new Error('Dados inválidos');
        }

        const { email, password } = schema.data;
        const user = await prismaClient.user.findUnique({ where: { email } });
        if (!user) {
          console.error('User not found:', email);
          return null;
        }

        if (!user.password) {
          console.error('User does not have a password set:', email);
          return null;
        }
        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
          console.error('Invalid password for user:', email);
          return null;
        }

        return user;
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
});
