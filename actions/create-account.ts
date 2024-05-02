'use server';

import { prismaClient } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { createAccountSchema } from '../types/login.types';

export const createAcountAction = async (values: z.infer<typeof createAccountSchema>) => {
  const validateFields = createAccountSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid Fields' };
  }

  const { name, email, phone, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });

    return { success: 'Account created successfully' };
  } catch (error) {
    console.error('Failed to create user account:', error);
    if (error instanceof Error) {
      return { error: error.message || 'Failed to create account' };
    }
    return { error: 'Failed to create account' };
  }
};
