import Navigation from "@/components/navigation";

export default function NotFound() {

  return (
    <div>
       <Navigation actuallyPage="none" />
       <div className="flex flex-col items-center justify-center h-screen -mt-20">
          <div className="text-center p-6">
            <p className="text-6xl font-bold text-green-500 mb-4">Erro 404:</p>
            <p className="text-2xl text-green-500 mb-2">Essa página que você acessou não existe.</p>
            <p className="text-xl">Navegue por uma página pela barra de navegação.</p>
          </div>
       </div>
    </div>
  )
}
