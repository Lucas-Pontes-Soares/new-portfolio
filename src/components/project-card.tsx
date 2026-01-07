import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, Monitor, TableOfContents } from "lucide-react";
import ReactPlayer from 'react-player'

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imagePath: string;
  description: string;
  tags: string[];
  topics: string[];
  repoUrl?: string;
  deployUrl?: string;
  videoUrl?: string;
  date?: string; 
}

export function ProjectCard({
  title,
  subtitle,
  imagePath,
  description,
  tags,
  topics,
  repoUrl,
  deployUrl,
  videoUrl,
  date,
}: ProjectCardProps) {
  return (
    <Card className="w-120 max-w-full flex flex-col">
      <CardHeader>
        <div className="w-full h-60 bg-secondary rounded-md">
          <div className="rounded-md overflow-hidden">
          <img src={imagePath} className="w-full h-60 object-contain" alt={title} />
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex justify-between items-center text-muted-foreground">
            <span>{subtitle}</span>
            {date && <span>{date}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 max-h-36">
        <p className="whitespace-pre-line">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {deployUrl && (
            <Button variant="outline" asChild className="cursor-pointer">
              <a href={deployUrl} target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-4 w-4" />
                Sistema
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="outline" asChild className="cursor-pointer">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="cursor-pointer">
                <TableOfContents className="mr-2 h-4 w-4" />
                Minhas funções
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="py-4">
                {videoUrl ? (
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <ReactPlayer 
                      className="absolute top-0 left-0"
                      src={videoUrl}
                      controls={true}
                      width='100%'
                      height='100%'
                    />
                  </div>
                ) : (
                  <div className="w-full h-60 bg-secondary rounded-md">
                    <img src={imagePath} className="w-full h-60 object-contain" alt={title} />
                  </div>
                )}
                <h1 className="text-lg font-semibold mt-6 mb-2">Minhas Funções:</h1>
                <ul className="space-y-2">
                  {topics.map((func, index) => (
                    <li key={index} className="list-disc ml-6">
                      {func}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 border-t-2 pt-4">
                  {tags.map((tag) => (
                    <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
}
