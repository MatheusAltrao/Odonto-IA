'use server';

import { signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function signInAction(email: string, password: string) {
  try {
    await signIn('credentials', { email, password, redirect: false });
    redirect('/dashboard/chat');
  } catch (error) {
    throw error;
  }
}
