import { Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram Principal',
    icon: Instagram,
    url: 'https://instagram.com/gruporaca',
    followers: '50k+'
  },
  {
    name: 'Instagram Vendas',
    icon: Instagram,
    url: 'https://instagram.com/gruporacavendas',
    followers: '25k+'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/gruporaca',
    followers: '40k+'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@gruporaca',
    followers: '15k+'
  }
];

export default function SocialLinks() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nossas Redes Sociais</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-white mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Acompanhe as novidades e fique por dentro de tudo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <social.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                <p className="text-gray-400 mb-4">{social.followers} seguidores</p>
                <div className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-200">
                  <span className="text-sm">Visitar</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
