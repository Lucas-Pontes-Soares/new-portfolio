import { SkillBadge } from "@/components/skill-badge";
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
import { FaCss3Alt, FaDatabase, FaExchangeAlt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact, FaRobot, FaStripe } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";

export default function Experiences() {

  return (
    <div>
      <Navigation actuallyPage="experiences"/>

      <div className="mt-32 p-6">
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/iriz_solues_em_t_i__logo.jpg" alt="IRIZ" />
                </Avatar>
                <div className="ml-4">
                  <CardTitle>IRIZ Soluções em T.I</CardTitle>
                  <CardDescription>Estágio em Programação</CardDescription>
                </div>
              </div>
              <CardAction>
                <p>Mar 2024 - Out 2025 (Remoto)</p>
                <p className="text-right">1 ano e 8 meses</p>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="list-disc p-4">
                <li>Trabalhei como full-stack, proporcionando uma visão abrangente do desenvolvimento, em sistemas legados e novos produtos.</li>
                <li>Conversei diretamente com os clientes, analisei requisitos, alinhei ideias, problemas, soluções.</li>
                <li>Integrei com serviços de pagamento através de API e Webhook.</li>
                <li>Desenvolvi agentes de IA para um sistema gerar automaticamente relatórios de desempenho dos clientes.</li>
                <li>Implementei mecanismos de segurança, incluindo criptografia de senhas e autenticação de usuários via tokens JWT.</li>
                <li>Gerenciei o banco de dados SQL, e construi e otimizei queries SQL complexas para grandes informações em múltiplas tabelas,
  expondo através de uma API com paginação.</li>
                <li>Administrei e realizei o deploy (hospedagem) de sistemas em produção, utilizando protocolos como FTP, SFTP e ferramentas de
  gerenciamento de servidores.</li>
                <li>Documentei os sistemas e organizei nossos repositórios utilizando boas práticas de versionamento.</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" icon={FaNodeJs} />
                <SkillBadge name="React.js" icon={FaReact} />
                <SkillBadge name="IA" icon={FaRobot} />
                <SkillBadge name="JWT" icon={SiJsonwebtokens} />
                <SkillBadge name="PHP" icon={FaPhp} />
                <SkillBadge name="Javascript" icon={FaJs} />
                <SkillBadge name="MySQL (SQL)" icon={FaDatabase} />
                <SkillBadge name="API REST" icon={FaExchangeAlt} />
                <SkillBadge name="Stripe" icon={FaStripe} />
                <SkillBadge name="Git/Github" icon={FaGitAlt} />
                <SkillBadge name="HTML" icon={FaHtml5} />
                <SkillBadge name="CSS" icon={FaCss3Alt} />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
