'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoaderCircle } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { status } = useSession();

  async function handleSignIn() {
    await signIn('google');
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">OdontoIA</CardTitle>
          <CardDescription>
            Tire dúvidas sobre odontologia com a OdontoIA, faça perguntas, resumos, provas e muito
            mais.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {status == 'unauthenticated' && (
            <Button
              onClick={handleSignIn}
              type="submit"
              className="w-full"
            >
              Entrar com o Google
            </Button>
          )}

          {status == 'authenticated' && (
            <Link href={'/dashboard/chat'}>
              <Button
                type="submit"
                className="w-full"
              >
                Usar OdontoIA
              </Button>
            </Link>
          )}

          {status == 'loading' && (
            <Button
              className="w-full"
              variant={'outline'}
            >
              <LoaderCircle
                className="animate-spin"
                size={20}
              />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
