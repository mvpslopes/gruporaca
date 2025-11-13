import { Phone, Mail, MessageCircle, Camera } from 'lucide-react';

const photographers = [
  {
    id: 1,
    name: 'Fotógrafo 1',
    specialty: 'Fotografia Equestre',
    phone: '(31) 99999-9999',
    email: 'fotografo1@gruporaca.com.br',
    whatsapp: '5531999999999',
    portfolio: 'https://portfolio-fotografo1.com.br'
  },
  {
    id: 2,
    name: 'Fotógrafo 2',
    specialty: 'Fotografia Equestre',
    phone: '(31) 88888-8888',
    email: 'fotografo2@gruporaca.com.br',
    whatsapp: '5531888888888',
    portfolio: 'https://portfolio-fotografo2.com.br'
  }
];

export default function Photographers() {
  return (
    <section id="fotografos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-black/5 rounded-full text-sm font-semibold text-gray-700">
              Nossos Fotógrafos
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            Equipe de <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #000000, #808080, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >Fotografia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profissionais especializados em capturar a beleza e elegância dos nossos cavalos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photographers.map((photographer, index) => (
            <div
              key={photographer.id}
              className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 rounded-xl p-6 text-center group-hover:border-black group-hover:bg-gradient-to-br group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                  <div className="flex justify-center mb-2">
                    <Camera size={32} className="text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {photographer.name}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 text-center mb-6 text-sm font-medium">{photographer.specialty}</p>

              <div className="space-y-3">
                <a
                  href={`tel:${photographer.phone}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-black transition-all duration-200 group/link p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover/link:bg-black flex items-center justify-center transition-colors">
                    <Phone size={16} className="text-gray-700 group-hover/link:text-white" />
                  </div>
                  <span className="text-sm font-medium">{photographer.phone}</span>
                </a>

                <a
                  href={`mailto:${photographer.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-black transition-all duration-200 group/link p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover/link:bg-black flex items-center justify-center transition-colors">
                    <Mail size={16} className="text-gray-700 group-hover/link:text-white" />
                  </div>
                  <span className="text-sm break-all font-medium">{photographer.email}</span>
                </a>

                <a
                  href={`https://wa.me/${photographer.whatsapp}?text=${encodeURIComponent(`Olá, ${photographer.name}! Gostaria de mais informações sobre serviços de fotografia.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 justify-center mt-4 font-semibold group-hover:shadow-lg hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

