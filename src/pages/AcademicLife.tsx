import Navigation from "@/components/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AcademicLife() {

  return (
    <div>
      <Navigation actuallyPage="academic-life"/>

      <div className="mt-32">
        <div className="flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/fatec_ourinhos.jpg" alt="FATEC" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>FATEC Ourinhos - Faculdade de Tecnologia de Ourinhos</CardTitle>
                  <CardDescription>Graduado em Análise e Desenvolvimento de Sistemas - AMS</CardDescription>
                </div>
              </div>
              <CardAction>
                <p>Jan 2024 - Dez 2025</p>
                <p className="text-right">2 anos</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Aprendi sobre estrutura de dados com a linguagem C.</li>
                <li>Resolvi problemas de otimização com pesquisa operacional.</li>
                <li>Desenvolvi projetos com modelos de IA.</li>
                <li>Trabalhei em equipe e organizamos entre nós, com ajuda do github.</li>
                <li>Aprendi padrões de projetos com a linguagem Java.</li>
                <li>Ministrei curso de robocode durante a feira de tecnologia da faculdade.</li>
                <li>Trabalhei com cloud, azure, docker, kubernetes.</li>
                <li>Desenolvi o meu Projeto Integrador, que também tivemos a publicação aceita no Congresso Nacional CONAIDUC.</li>
                <li>Participei de maratonas de programação em C.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Inteligência Artificial</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Pesquisa Operacional</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Estrutura de Dados</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Aprendizado de Máquina</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Banco de Dados</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">DevOps</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Engenharia de Software</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Cloud</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Matemática Discreta</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Estatística Aplicada</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Padrões de Projeto</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Computação Distribuida</span>
              </div>
            </CardFooter>          
          </Card>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/etec_ourinhos.jpg" alt="ETEC" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>ETEC Ourinhos - Escola Técnica Estadual de São Paulo</CardTitle>
                  <CardDescription>Técnico em Desenvolvimento de Sistemas - AMS</CardDescription>
                </div>
              </div>
              <CardAction>
                <p>Jan 2021 - Dez 2023</p>
                <p className="text-right">3 anos</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Construi sites com tecnologias basicas como html, css e javascript.</li>
                <li>Fiz algoritmos para aprender lógica de programação na linguagem C++.</li>
                <li>Desenvolvi meu TCC, que tive bastante contato com APIs.</li>
                <li>Participei ativamente de palestras que tinhamos com empresas parceiras do programa, como Coopersap, L4E.</li>
                <li>Participei do 5 Hackathon Acadêmico.</li>
                <li>Desenvolvi projetos de robótica.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Programação Web</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Programação Mobile</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Algoritmos</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Banco de Dados</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Análise de Requisitos</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">Arduino</span>
              </div>
            </CardFooter>          
          </Card>
        </div>
      </div>
    </div>
  )
}
