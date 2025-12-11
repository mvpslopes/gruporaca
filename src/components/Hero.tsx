import { ChevronRight } from 'lucide-react';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Background com overlay mais sutil para destacar a imagem */}
      <div className="absolute inset-0 bg-cover bg-center brightness-110 saturate-110" style={{ backgroundImage: "url('/Fundo Cavalo preto.jpg')", transform: 'scaleX(-1)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]"></div>
      
      {/* Overlay escuro apenas no lado esquerdo para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
      
      {/* Elementos decorativos mais sutis */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex items-center">
          {/* Conteúdo principal */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white/90">
                Referência Nacional em Leilões
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
              <div>Estamos</div>
              <div>prontos para</div>
              <div>elevar o nível</div>
              <div>da sua criação</div>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              <div>Conectando criadores e apaixonados</div>
              <div>
                pela raça com{' '}
                <span className="text-white font-semibold">transparência</span>,{' '}
                <span className="text-white font-semibold">profissionalismo</span>
              </div>
              <div>
                e{' '}
                <span className="text-white font-semibold">compromisso com a excelência</span>.
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#leiloes"
                className="group bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 hover:scale-105"
              >
                Agenda de Leilões
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://gruporaca.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Site Oficial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
