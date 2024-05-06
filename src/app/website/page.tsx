import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, CheckIcon, CircuitBoard } from 'lucide-react';
import Link from 'next/link';

const Website = () => {
  return (
    <div className=" min-h-screen w-full max-w-[1120px] mx-auto px-4 space-y-8 transition-all duration-500">
      <header className=" h-14 flex items-center border-b ">
        <div className="flex items-center justify-center gap-2">
          <CircuitBoard size={20} />
          <h1 className="font-medium text-lg"> OdontoIA.</h1>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            Sobre
          </Link>

          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Depoimentos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#plans"
          >
            Planos
          </Link>
        </nav>
      </header>

      <section
        id="home"
        className="w-full py-12 md:py-24 "
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12 ">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transforme sua vida estudantil com a OdontoIA.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl ">
                Integre o GPT-4 Turbo, treinado especificamente para a área de odontologia, e
                realize trabalhos,crie resumos e ajude em atividades.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#">
                <Button>Experimente Agora</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-full py-12 md:py-24 "
      >
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 ">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Suporte Acadêmico Inteligente
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Tenha um especialista na palma da sua mão.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Assistência Personalizada</h3>
              <p className="text-sm text-muted-foreground ">
                O modelo GPT-4 Turbo analisa as informações dos alunos e fornece recomendações
                personalizadas, garantindo um suporte eficiente e personalizado para as necessidades
                de cada indivíduo.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Erros reduzidos</h3>
              <p className="text-sm text-muted-foreground ">
                A integração com IA reduz a chance de erros humanos, garantindo maior precisão no
                esclarecimento de dúvidas e orientação de estudos.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Produtividade aumentada</h3>
              <p className="text-sm text-muted-foreground ">
                Com a ajuda do GPT-4 Turbo, os alunos podem concluir estudos acadêmicos com mais
                eficiência tarefas, aumentando sua produtividade geral.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Experiência de aprendizagem aprimorada</h3>
              <p className="text-sm text-muted-foreground ">
                Os alunos se sentem mais confiantes e satisfeitos com um estudo acadêmico
                personalizado e preciso apoio, fortalecendo seu relacionamento com a instituição de
                ensino.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Acesso a informações atualizadas</h3>
              <p className="text-sm text-muted-foreground ">
                O modelo GPT-4 Turbo mantém alunos e educadores atualizados com as mais recentes
                protocolos de pesquisa e acadêmicos, garantindo que recebam o melhor suporte
                possível.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Redução de custos</h3>
              <p className="text-sm text-muted-foreground ">
                Ao aumentar a eficiência e a produtividade, nosso serviço SaaS ajuda a reduzir o
                custos operacionais das instituições de ensino.
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
            <Link href="#">
              <Button> Experimente agora</Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="w-full py-12 md:py-24 "
      >
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O que nossos clientes dizem
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Veja o que os alunos estão achando da integração do GPT-4 Turbo em suas atividades.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-3  gap-8 ">
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">Ana Clara</div>
                  </div>
                  <p className="text-muted-foreground text-left ">
                    O Odonto IA foi fundamental para minha aprovação na prova de Biomateriais! A
                    ferramenta me forneceu resumos completos e atualizados sobre os principais
                    tópicos da disciplina, além de exercícios interativos que me ajudaram a fixar o
                    conteúdo. Recomendo para todos os estudantes de odontologia que buscam uma forma
                    eficaz de estudar e se preparar para as provas.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>BO</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">Bruno Oliveira</div>
                  </div>
                  <p className="text-muted-foreground text-left ">
                    O Odonto IA me ajuda a economizar tempo e otimizar meus estudos. A ferramenta me
                    permite criar resumos personalizados das aulas, o que me facilita na hora de
                    revisar para as provas. Além disso, o Odonto IA oferece videoaulas e simulados
                    que me ajudam a me preparar ainda melhor. É uma ferramenta completa para o
                    estudante de odontologia!
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">Caroline Silva</div>
                  </div>
                  <p className="text-muted-foreground text-left ">
                    O Odonto IA me ajuda a entender melhor os conteúdos das aulas. A ferramenta
                    explica os conceitos de forma clara e concisa, utilizando linguagem simples e
                    exemplos práticos. Isso me permite tirar dúvidas e aprofundar meus
                    conhecimentos. Recomendo para todos os estudantes que têm dificuldade em
                    acompanhar as aulas ou que precisam de um reforço positivo.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">Daniel Souza</div>
                  </div>
                  <p className="text-muted-foreground text-left ">
                    O Odonto IA me ajuda a me preparar para as apresentações em grupo. A ferramenta
                    me fornece sugestões de temas e me ajuda a organizar minhas ideias. Além disso,
                    o Odonto IA me permite criar slides profissionais e personalizados. É uma
                    ferramenta essencial para qualquer estudante de odontologia que precisa fazer
                    apresentações.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>ES</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">Eduardo Santos</div>
                  </div>
                  <p className="text-muted-foreground text-left ">
                    O Odonto IA me ajuda a me preparar para os estágios curriculares. A ferramenta
                    me fornece informações sobre as principais áreas da odontologia e me ajuda a
                    desenvolver as habilidades necessárias para atuar na clínica. Além disso, o
                    Odonto IA me permite fazer simulados de casos clínicos, o que me deixa mais
                    confiante para enfrentar os desafios do dia a dia.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>GP</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">Gabriela Pereira</div>
                  </div>
                  <p className="text-muted-foreground text-left ">
                    O Odonto IA me ajuda a me manter atualizado sobre as últimas novidades da
                    odontologia. A ferramenta me envia alertas sobre novos estudos e artigos
                    científicos relevantes para a minha área de estudo. Além disso, o Odonto IA me
                    permite realizar cursos online e participar de webinars com especialistas
                    renomados. É uma ferramenta completa para o estudante de odontologia que busca
                    se destacar na profissão.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="plans"
        className="w-full py-12 md:py-24 "
      >
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Escolha o plano ideal para sua clínica
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Encontre o plano que melhor se adapta às necessidades da sua vida odontológica.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Card className="h-[400px] w-full max-w-[350px] border border-border rounded  p-8">
              <CardContent className="p-0 w-full h-full flex flex-col justify-between">
                <div className="flex flex-col text-left space-y-2  ">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between ">
                      <h3 className="text-xl font-bold">Gratuito</h3>
                    </div>
                  </div>
                  <ul className="grid gap-2 py-2">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      24 horas
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      GPT-3.5
                    </li>{' '}
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Faça Provas
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Criar Resumos
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="self-start">
                    <div className="text-2xl font-semibold">R$ 00,00</div>
                  </div>

                  <Button variant={'default'}>Investir</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="h-[400px] w-full max-w-[350px] border border-primary rounded p-8">
              <CardContent className="p-0 w-full h-full flex flex-col justify-between">
                <div className="flex flex-col text-left space-y-2 ">
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
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="text-2xl font-semibold">R$ 19,90</div>
                    <p className="text-xs text-muted-foreground">Por mês</p>
                  </div>

                  <Button variant={'default'}>Investir</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-4 border-t flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CircuitBoard size={20} />
            <h1 className="font-medium text-lg"> OdontoIA.</h1>
          </div>

          <p className="text-xs text-muted-foreground">todos os direitos reservados.</p>
        </div>

        <Link
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 "
          href={'#home'}
        >
          Voltar para o topo <ArrowUp size={18} />
        </Link>
      </footer>
    </div>
  );
};

export default Website;
