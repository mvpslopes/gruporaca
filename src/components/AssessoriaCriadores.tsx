import { CheckCircle, FileText, Calendar, ClipboardList, Users, Target, Zap, Award, Phone, MessageCircle, Database, FileCheck } from 'lucide-react';

export default function AssessoriaCriadores() {
  const services = [
    {
      icon: Users,
      title: 'Cadastros de novos associados',
      description: 'Facilitamos o processo de cadastro junto às associações.'
    },
    {
      icon: Calendar,
      title: 'Comunicados de prenhezes, embriões e nascimentos',
      description: 'Realizamos os comunicados dentro do prazo estipulado pelas associações, evitando multas.'
    },
    {
      icon: ClipboardList,
      title: 'Controle de plantel',
      description: 'Acompanhamento completo da gestação ao nascimento até o registro definitivo.'
    },
    {
      icon: FileText,
      title: 'Contratos e controle',
      description: 'Gestão de compra, venda e condomínios de animais.'
    },
    {
      icon: FileCheck,
      title: 'Abertura de serviços para o técnico',
      description: 'Acompanhamento completo da visita técnica.'
    },
    {
      icon: Database,
      title: 'Leitor de chip',
      description: 'Conferência e identificação dos animais.'
    },
    {
      icon: Award,
      title: 'Inscrições em copas e exposições',
      description: 'Facilitamos sua participação em eventos.'
    },
    {
      icon: Target,
      title: 'Sistema completo de gestão de plantel',
      description: 'Smart Criador - Solução completa para gestão do seu criatório.'
    },
    {
      icon: Zap,
      title: 'Toda demanda junto às associações',
      description: 'Atendemos todas as necessidades junto às associações das Raças.'
    },
    {
      icon: FileText,
      title: 'Transferências de propriedade',
      description: 'Gestão completa de transferências de propriedade de animais.'
    }
  ];

  return (
    <section id="assessoria-criadores" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-black/5 rounded-full text-sm font-semibold text-gray-700">
              SERVIÇOS ESPECIALIZADOS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            ASSESSORIA <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #000000, #808080, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >AOS CRIADORES</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-black mb-4 max-w-4xl mx-auto leading-tight">
            Oferecemos aos criadores um atendimento de <span className="text-black">qualidade</span>,{' '}
            <span className="text-black">personalizado</span> de acordo com as{' '}
            <span className="text-black">demandas de cada cliente</span>!
          </p>
        </div>

        {/* Nossos Serviços */}
        <div className="mb-20">
          <h3 className="text-4xl font-extrabold text-black mb-12 text-center">NOSSOS SERVIÇOS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Planejamento e Execução */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black rounded-3xl p-10 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">PLANEJAMENTO</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Analisar e definir os objetivos do criador e criatório, direcionando todas as pendências e demandas para o nosso setor operacional, cumprindo prazos das devidas necessidades estipulados pelas associações.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border-2 border-black">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black">EXECUÇÃO</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Oferecemos um atendimento humanizado, ágil e prático, para solucionar as necessidades dos clientes e do criatório conforme a demanda.
            </p>
          </div>
        </div>

        {/* Mensagem Final */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12 text-white text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
            Excelência e sucesso na sua criação!
          </h3>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Pronto para transformar seu criatório?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como a Assessoria Ariane Andrade, pode ajudar você a alcançar seus objetivos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:2138128494"
              className="group bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone size={20} />
              Ligar Agora
            </a>
            <a
              href="https://wa.me/552138128494?text=Olá! Gostaria de mais informações sobre a Assessoria aos Criadores."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

