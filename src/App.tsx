import { useState, useEffect } from 'react';
import { LogIn, Database } from 'lucide-react';
import Hero from './components/Hero';
import FeaturedAuctions from './components/FeaturedAuctions';
import Assessors from './components/Assessors';
import AssessoriaCriadores from './components/AssessoriaCriadores';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DatabasePage from './components/Database';
import Loading from './components/Loading';
import CTA from './components/CTA';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);

  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem('gruporaca_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = async (userData: any) => {
    setIsLoading(true);
    // Simular delay de carregamento
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser(userData);
    localStorage.setItem('gruporaca_user', JSON.stringify(userData));
    setIsLoading(false);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Simular delay de logout
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser(null);
    localStorage.removeItem('gruporaca_user');
    setIsLoggingOut(false);
  };

  // Se mostrar banco de dados, exibir página separada
  if (showDatabase) {
    return <DatabasePage />;
  }

  // Se o usuário estiver logado, mostrar o dashboard
  if (user) {
    return (
      <>
        {isLoggingOut && <Loading message="Saindo do sistema..." />}
        <Dashboard user={user} onLogout={handleLogout} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Grupo Raça" 
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center gap-6">
              <a href="#leiloes" className="text-gray-300 hover:text-white transition-colors duration-200">
                Leilões
              </a>
              <a href="#assessores" className="text-gray-300 hover:text-white transition-colors duration-200">
                Assessores
              </a>
              <a href="#assessoria-criadores" className="text-gray-300 hover:text-white transition-colors duration-200">
                Assessoria aos Criadores
              </a>
              <button 
                onClick={() => setShowDatabase(true)}
                className="text-white px-6 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 border border-gray-400/50 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.2), rgba(160, 160, 160, 0.3), rgba(192, 192, 192, 0.2))',
                  boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(192, 192, 192, 0.3), rgba(200, 200, 200, 0.4), rgba(192, 192, 192, 0.3))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(192, 192, 192, 0.2), rgba(160, 160, 160, 0.3), rgba(192, 192, 192, 0.2))';
                }}
              >
                <Database size={18} />
                Banco de Dados
              </button>
              <button 
                onClick={() => setShowLogin(true)}
                className="text-white px-6 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 border border-gray-400/50 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.3), rgba(160, 160, 160, 0.4), rgba(192, 192, 192, 0.3))',
                  boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(192, 192, 192, 0.4), rgba(200, 200, 200, 0.5), rgba(192, 192, 192, 0.4))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(192, 192, 192, 0.3), rgba(160, 160, 160, 0.4), rgba(192, 192, 192, 0.3))';
                }}
              >
                <LogIn size={18} />
                Sistema Interno
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <FeaturedAuctions />
      <CTA />
      <AssessoriaCriadores />
      <Assessors />
      <SocialLinks />
      <Footer />
      <WhatsAppButton />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default App;
