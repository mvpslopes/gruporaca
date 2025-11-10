import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Excel\u00eancia em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
              Leil\u00f5es de Cavalos
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            O Grupo Ra\u00e7a \u00e9 refer\u00eancia nacional em leil\u00f5es de cavalos de elite,
            conectando criadores e apaixonados pela ra\u00e7a com transpar\u00eancia e profissionalismo.
          </p>
          <div className="flex gap-4">
            <a
              href="#leiloes"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
            >
              Ver Leil\u00f5es em Destaque
              <ChevronRight size={20} />
            </a>
            <a
              href="#site"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              Site Oficial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
