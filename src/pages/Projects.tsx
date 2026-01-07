import Navigation from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Dumble: Sistema Educacional Com Inteligência Artificial",
    subtitle: "FATEC | Projeto Integrador",
    date: "Fev 2025 - Dez 2025",
    imagePath: "/dumble.png",
    description: "Centraliza o ensino para fortalecer o vínculo professor-aluno, com questões focadas no material do professor. Com IA com acesso ao material do professor para sugestões de perguntas e responder duvidas.\n🎖️ Projeto publicado no Congresso Nacional CONAIDUC.",
    tags: ["IA", "Node.js", "React.js", "PostgreSQL (SQL)", "RAG", "JWT", "Heroku", "Git", "tailwind-css", "shadcn-ui"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares",
    deployUrl: "https://dumble.onrender.com/",
    topics: [
      "Desenvolvi a parte da IA com RAG, onde os professores anexavam arquivos e o conteudo deles eram disponibilizados para a IA.",
      "Construi os prompts rigorosos e estruturados de IA, para o chat-bot e a sugestão de perguntas.",
      "Desenvolvi o front-end de maneira responsiva.",
      "Implementei autenticação de usuários via tokens JWT.",
      "Gerenciei o banco de dados SQL.",
      "Administrei e realizei o deploy (hospedagem)."
    ]
  },
  {
    title: "Avanti Intelligence - IA para detectar pneumonia",
    subtitle: "Projeto para Geniuscon 2025",
    date: "Mai 2025 - Out 2025",
    imagePath: "/avanti.png",
    description: "Modelo de IA construido através de CNN com aprendizado supervisionado através de imagens de raio-x de torax para detectar se paciente possui ou não pneumonia. Modelo foi exportado e disponibilizado para uso em nosso sistema. \n 🎖️ Projeto chegou nas finais na Geniuscon 2025.",
    tags: ["IA", "Python", "CNN", "React.js", "Aprendizado Supervisionado", "Git", "tailwind-css", "shadcn-ui"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/avanti-intelligence",
    deployUrl: "https://avanti-intelligence.onrender.com/",
    topics: [
      "Desenvolvemos a IA, modelo, treinando através de um dataset real de imagens de raio-x de torax.",
      "Fizemos o treinamento da CNN de maneira supervisionada.",
      "Analisamos o resultados e conseguimos obter 90% de acerto quando o paciente tinha a doença.",
      "Implementei autenticação de usuários via tokens JWT.",
      "Aplicamos o conceito de separar e treinamento, validação, teste.",
      "Desenvolvi o nosso site para apresentar nosso projeto, e importei o modelo para testes."
    ],
  },
  {
    title: "Site | Atividade Interdisciplinar Kubernetes",
    subtitle: "Atividade da Faculdade",
    date: "Out 2025 - Out 2025",
    imagePath: "/atividade_docker.png",
    description: "Atividade Interdiciplinar das matérias de DEVOPS e Cloud da faculdade. Para apredenmos a trabalhar com docker e implementar kubernetes para hospedar na azure.",
    tags: ["Docker", "DockerHub", "CI", "CD", "Github", "Git", "Github Actions", "Azure", "Kubernetes"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/atividade-interdisciplinar-kubernetes",
    topics: [
      "Versionei o código no Github.",
      "Configurei o Docker para empacotar o site junto com o servidor Nginx.",
      "Publiquei a imagem no Docker Hub.",
      "Implementei CI, com Github Actions, para verificar o código a cada push, inspecionando todo o HTML e CSS.",
      "Configurei o Kubernetes na Azure (AKS) para rodar com 2 pods.",
      "Hospedei os site com docker utilizano Kubernetes na Azure."
    ],
  },
  {
    title: "Site | Jornal Docker",
    subtitle: "Atividade da Faculdade",
    date: "Set de 2025 - Set de 2025",
    imagePath: "/jornal_docker.png",
    description: "Projeto da faculdade da matéria de DevOPS é um site de três páginas com o tema de um jornal, que foi criado para explicar os conceitos fundamentais do Docker e da contêinerização.",
    tags: ["Docker", "build", "HTML", "CSS", "CI", "Github", "Git", "Github Actions", "Github Pages"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/mini-site-docker",
    topics: [
      "Desenvolvi o Front-end, que abordam sobre o Docker.",
      "Implementei Integração Continua (CI) com Github Actions.",
      "Configurei o Docker para build e Docker compose para desenvolvimento.",
      "Automatizei para a cada push ou pull request, seja executado o projeto e construido para ser testado de forma consistente.",
      "Hospedei o site através do Github Pages."
    ],
  },
  {
    title: "WineQuality - Machine Learning, Árvore de Decisão para Classificar Vinhos",
    subtitle: "Trabalho da Faculdade",
    date: "Jun de 2025 - Jun de 2025",
    imagePath: "/wine.png",
    description: "Um algoritmo de Árvore de Decisão (um modelo supervisionado) para classificar a qualidade de vinhos, utilizando atributos químicos e físicos de um dataset rotulado. O exercício envolve o pipeline completo de Machine Learning.",
    tags: ["Python", "IA", "Árvore de Decisão"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/wine-quality",
    topics: [
      "Treinamos um modelo através de um dataset supervisioado.",
      "Utilizamos algoritmos de Árvore de Decisão",
      "Passamos por todas as etapas para construir um modelo, treinamento, validações, testes, avaliação."
    ],
  },
  {
    title: "MazeSolver - Resolução de Labirinto com Busca Cega (BFS)",
    subtitle: "Trabalho da Faculdade",
    date: "Mai de 2025 - Mai de 2025",
    imagePath: "/labirinto.png",
    description: "Trabalho de Inteligência Artificial, um algoritmo em Python que gera labirintos aleatórios e aplica busca cega por largura (BFS) para encontrar um caminho do ponto de partida (I) até o destino (F) em um labirinto gerado aleatoriamente, sem utilizar heurísticas ou informações extras.",
    tags: ["Python", "Busca cega", "Python", "Navegação"],
    repoUrl: "https://github.com/Lucas-Pontes-Soares/wine-quality",
    topics: [
      "Desenvolvemos um algoritmo que utiliza o conceito de método de busca cega (largura).",
      "Desenvolvemos uma lógica para gerar labirintos aleatórios que são possíveis de resolver.",
      "Implementamos uma visualização do labirinto sendo descoberto.",
      "Observamos em prática como funciona navegação da busca em largura."
    ],
  },
  {
    title: "Sistema para Assistente Social",
    subtitle: "Trabalho da Faculdade",
    date: "Fev de 2024 - Dez de 2024",
    imagePath: "/social.png",
    description: "Na FATEC Ourinhos eu e minha turma, desenvolvemos um projeto para a Assistente Social da prefeitura de Canitar, nas disciplinas de Engenharia de Software e Banco de Dados. ",
    tags: ["Banco de Dados", "SQL", "Análise de Requisitos"],
    topics: [
      "Criamos toda a ideia do projeto, como funcionaria.",
      "Fizemos vários diagramas (casos de uso, dicionário de dados, de classes, de atividades).",
      "Construímos protótipos.",
      "Criamos o banco de dados em SQL, com todas as tabelas e relacionamentos.",
      "Fizemos a importação dos dados que estavam em uma planilha do excel."
    ],
  },
  {
    title: "Ministrei mini-curso de Robocode",
    subtitle: "Ministrado na feira da Faculdade",
    date: "Out de 2024 - Out de 2024",
    imagePath: "/robocode.png",
    description: "Na FATEC Ourinhos e mais alguns colegas, organizamos e ministramos um minicurso sobre robocode aos alunos (uma plataforma para construir robos, tanques, virtuais para batalhar) ensinamos como programar, e no final organizamos um campeonato entre os alunos.",
    tags: ["Arduino", "Robocode", "Minicurso"],
    topics: [
      "Ministrei para os alunos sobre a plataforma. ",
      "Criamos um robô juntos, explicando sobre o código, mostramos exemplos.",
      "Expliquei na prática como desenvolver nessa ferramenta.",
      "Criamos o banco de dados em SQL, com todas as tabelas e relacionamentos.",
      "Organizamos no final um campeonato entre os alunos disputando os melhores robôs desenvolvidos por eles."
    ],
  },
  {
    title: "GPLink",
    subtitle: "TCC da ETEC",
    date: "Fev de 2023 - Out de 2023",
    imagePath: "/gplink.png",
    repoUrl: "https://github.com/Lucas-Pontes-Soares/ProjetoTCC",
    deployUrl: "https://gplink-aj6y.onrender.com/",
    description: "O GPLink é um sistema web para o público gamer, com o objetivo de transformar a experiência de todos. Com a funcionalide de unir os diferentes perfis dos jogadores (Xbox, Steam, Playstation) em apenas um lugar, mostrar suas conquistas, jogos, através das APIs",
    tags: ["React.js", "Node.js", "MongoDB", "API"],
    topics: [
      "Integrei o sistema com 3 diferentes plataformas Xbox, Steam e Playstation, através de apis e bibliotecas, trabalhando com paginação.",
      "Desenvolvi o front-end onde exibia as informações dos perfis das 3 plataformas.",
      "Utilizei autenticação via tokens JWT.",
      "Gerenciei o banco de dados no mongoDB, noSQL.",
      "Trabalhei de forma full-stack."
    ],
  },
]

export default function Projects() {

  return (
    <div>
      <Navigation actuallyPage="projects"/>

      <div className="mt-32 p-6 flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
