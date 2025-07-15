import { Button } from "@/components/ui/button";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8 ">
        <img src="/lovable-uploads/logo.png" alt="Next Gain Logo" className="w-24 h-24 border-black rounded-full" />
      </div>

      {/* Botão de Boas-vindas */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Bem-vindo à Next Gain
        </h1>
        <a href="https://nextgain.com.br/"><Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
          Entrar na Plataforma
        </Button></a>
      </div>

      {/* Redes Sociais */}
     
    </div>;
};
export default Index;