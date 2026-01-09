import Navigation from "@/components/navigation";
import { SkillBadge } from "@/components/skill-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BR, ES, US } from "country-flag-icons/react/3x2";
import { LucideFileJson } from "lucide-react";
import { FaAngular, FaArrowsAlt, FaCheck, FaClipboardList, FaCode, FaComment, FaCss3Alt, FaDatabase, FaDocker, FaExchangeAlt, FaGitAlt, FaHtml5, FaJava, FaJs, FaLightbulb, FaMicrochip, FaMobileAlt, FaNodeJs, FaNpm, FaPalette, FaPhp, FaProjectDiagram, FaReact, FaServer, FaTasks, FaThLarge, FaUsers, FaWrench } from "react-icons/fa";
import { GiFamilyTree } from 'react-icons/gi';
import { SiTypescript } from "react-icons/si";

export default function Home() {

  return (
    <div>
      <Navigation actuallyPage="about-me"/>
      <div className="mt-32 p-6">
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="mx-auto mb-12 w-auto text-center">
            <h1 className="text-green-500 font-extrabold text-4xl md:text-5xl lg:text-6xl">"Fazendo a ponte entre seu problema e minha solução"</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16">
            <div className="lg:w-1/3 flex items-center justify-center">
              <img src="/eu.jpg" className="rounded-md w-60 h-60 object-cover" />
            </div>

            <Card className="lg:w-2/3">
              <CardHeader>
                <CardTitle><strong className="text-green-500">Lucas Pontes Soares</strong>,</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                
                <p>Olá, sou Desenvolvedor Full-Stack Júnior com quase <strong className="text-green-500">2 anos de experiência</strong> em <strong className="text-green-500">Node.JS</strong>, <strong className="text-green-500">React.JS</strong> e gerenciamento de bancos de dados <strong className="text-green-500">SQL</strong>. <br /> <br />
                Habilidade em automação de processos e desenvolvimento de <strong className="text-green-500">agentes de IA</strong>. <br /> <br />
                Com o objetivo em especializar em <strong className="text-green-500">Back-end</strong>, busco posição profissional focado em entregar soluções robustas, otimizar processos e contribuir ativamente para o sucesso da equipe.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle># Hard Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Tecnologias:</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="HTML" icon={FaHtml5} />
                  <SkillBadge name="CSS" icon={FaCss3Alt} />
                  <SkillBadge name="JavaScript" icon={FaJs} />
                  <SkillBadge name="Typescript" icon={SiTypescript} />
                  <SkillBadge name="Node.JS" icon={FaNodeJs} />
                  <SkillBadge name="React.JS" icon={FaReact} />
                  <SkillBadge name="Docker" icon={FaDocker} />
                  <SkillBadge name="Angular" icon={FaAngular} />
                  <SkillBadge name="Arduino" icon={FaMicrochip} />
                  <SkillBadge name="PHP" icon={FaPhp} />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="SQL" icon={FaServer} />
                  <SkillBadge name="NPM" icon={FaNpm} />
                  <SkillBadge name="Git" icon={FaGitAlt} />
                  <SkillBadge name="Flutter" icon={FaMobileAlt} />
                  <SkillBadge name="API" icon={FaExchangeAlt} />
                  <SkillBadge name="Java" icon={FaJava} />
                  <SkillBadge name="JSON" icon={LucideFileJson} />
                  <SkillBadge name="C" icon={FaCode} />
                </div>
                <h3 className="font-semibold mt-4 mb-2">Fundamentos:</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Estrutura de Dados" icon={GiFamilyTree} />
                  <SkillBadge name="Lógica de Programação" icon={FaLightbulb} />
                  <SkillBadge name="Boas Práticas" icon={FaCheck} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle># Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Práticas:</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Trabalho em Equipe" icon={FaUsers} />
                  <SkillBadge name="Organização" icon={FaClipboardList}  />
                  <SkillBadge name="Metodologias Ágeis" icon={FaProjectDiagram} />
                  <SkillBadge name="Kanban" icon={FaThLarge}  />
                  <SkillBadge name="Scrum" icon={FaTasks}  />
                  <SkillBadge name="Criatividade" icon={FaPalette} />
                  <SkillBadge name="Adaptação" icon={FaArrowsAlt} />
                  <SkillBadge name="Comunicação" icon={FaComment} />
                  <SkillBadge name="Resolução de Problemas" icon={FaWrench} />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle># Idiomas</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SkillBadge name="Portugues: Fluente" icon={BR} />
                  <SkillBadge name="Inglês: Intermediário/Avançado" icon={US} />
                  <SkillBadge name="Espanhol: Básico" icon={ES} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
