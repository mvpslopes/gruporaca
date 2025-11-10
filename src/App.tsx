import { LogIn } from 'lucide-react';
import Hero from './components/Hero';
import FeaturedAuctions from './components/FeaturedAuctions';
import Assessors from './components/Assessors';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white tracking-wider">GRUPO RAÇA</h1>
            </div>
            <div className="flex items-center gap-6">
              <a href="#leiloes" className="text-gray-300 hover:text-white transition-colors duration-200">
                Leilões
              </a>
              <a href="#assessores" className="text-gray-300 hover:text-white transition-colors duration-200">
                Assessores
              </a>
              <a href="#site" className="text-gray-300 hover:text-white transition-colors duration-200">
                Site Oficial
              </a>
              <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2.5 rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-200 flex items-center gap-2 border border-gray-600">
                <LogIn size={18} />
                Sistema Interno
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <FeaturedAuctions />
      <Assessors />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
