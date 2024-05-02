import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

const Plans = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="space-y-4 border-0 p-0 shadow-none ">
        <CardHeader className="p-0">
          <CardTitle> Preços simples. Possibilidades ilimitadas.</CardTitle>
          <CardDescription className="max-w-[500px] ">
            Invista menos que o custo de um lanche em sua evolução profissional com OdontoIA!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="">
            <div className="flex flex-col space-y-2 rounded border border-border p-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between ">
                  <h3 className="text-xl font-bold">Profissional</h3>
                </div>
              </div>
              <ul className="grid gap-2 py-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Perguntas Ilimitadas
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  GPT-4 Turbo
                </li>{' '}
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Faça Provas
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Criar Resumos
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Contato para suporte
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Participar das futuras atualizações
                </li>
              </ul>
              <div className="flex items-center justify-between gap-4">
                <div className="self-start">
                  <div className="text-2xl font-semibold">R$ 19,90</div>
                  <p className="text-xs text-muted-foreground">Por mês</p>
                </div>

                <Button variant={'default'}>Investir</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Plans;
