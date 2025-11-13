import { useState, useEffect } from 'react';
import { 
  LogIn, X, Search, Upload, Eye, Download, Trash2, 
  Database, Image as ImageIcon, Lock, LogOut, User
} from 'lucide-react';
import Loading from './Loading';
import Modal from './Modal';

export default function DatabasePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [photos, setPhotos] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Usuários autorizados para o banco de dados
  const authorizedUsers = [
    { email: 'admin@gruporaca.com.br', password: 'admin123', name: 'Administrador', role: 'admin' },
    { email: 'designer@gruporaca.com.br', password: 'designer123', name: 'Designer', role: 'designer' },
    { email: 'fotografo@gruporaca.com.br', password: 'fotografo123', name: 'Fotógrafo', role: 'photographer' },
    { email: 'designer2@gruporaca.com.br', password: 'designer123', name: 'Designer 2', role: 'designer' },
  ];

  useEffect(() => {
    // Verificar se já está autenticado
    const savedUser = localStorage.getItem('database_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
      setShowLogin(false);
      loadPhotos();
    }
  }, []);

  const loadPhotos = () => {
    // Carregar fotos mock (em produção viria de uma API)
    const mockPhotos = [
      {
        id: '1',
        animal_id: '1',
        animal_name: 'Thunder',
        url: '/close-up-no-cavalo-ao-ar-livre.jpg',
        uploaded_at: new Date().toISOString(),
        uploaded_by: 'Fotógrafo',
        tags: ['Mangalarga', 'Macho'],
        size: '1.2 MB'
      },
      {
        id: '2',
        animal_id: '2',
        animal_name: 'Bella',
        url: '/lindo-cavalo-castanho-close-up-focinho-aparencia-bonita-juba-plano-de-fundo-campo-de-atletismo-curral-arvores-cavalos-sao-animais-maravilhosos.jpg',
        uploaded_at: new Date(Date.now() - 86400000).toISOString(),
        uploaded_by: 'Designer',
        tags: ['Quarto de Milha', 'Fêmea'],
        size: '980 KB'
      },
      {
        id: '3',
        animal_id: '3',
        animal_name: 'Spirit',
        url: '/lindo-cavalo-marrom-ao-ar-livre.jpg',
        uploaded_at: new Date(Date.now() - 172800000).toISOString(),
        uploaded_by: 'Fotógrafo',
        tags: ['Árabe', 'Macho'],
        size: '1.5 MB'
      },
    ];
    setPhotos(mockPhotos);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const user = authorizedUsers.find(
        u => u.email === loginEmail && u.password === loginPassword
      );

      if (user) {
        const { password: _, ...userWithoutPassword } = user;
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        setShowLogin(false);
        localStorage.setItem('database_user', JSON.stringify(userWithoutPassword));
        loadPhotos();
      } else {
        setLoginError('Email ou senha incorretos');
      }
    } catch (err) {
      setLoginError('Erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setShowLogin(true);
    localStorage.removeItem('database_user');
    // Redirecionar para a página principal
    window.location.href = '/';
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
    
    if (fileInput?.files && fileInput.files.length > 0) {
      const newPhotos = Array.from(fileInput.files).map((file, idx) => ({
        id: String(photos.length + idx + 1),
        animal_id: formData.get('animal_id') as string,
        animal_name: formData.get('animal_name') as string || 'Animal',
        url: URL.createObjectURL(file),
        uploaded_at: new Date().toISOString(),
        uploaded_by: user.name,
        tags: (formData.get('tags') as string)?.split(',').map(t => t.trim()).filter(Boolean) || [],
        size: `${Math.round(file.size / 1024)} KB`
      }));
      setPhotos([...photos, ...newPhotos]);
      setShowUploadModal(false);
    }
  };

  if (showLogin && !isAuthenticated) {
    return (
      <>
        {loading && <Loading message="Autenticando..." />}
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-2">Banco de Dados de Fotos</h2>
              <p className="text-gray-600">Acesso para designers e fotógrafos</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {loginError}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  'Entrando...'
                ) : (
                  <>
                    <LogIn size={20} />
                    Entrar
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 font-semibold mb-2">Usuários autorizados:</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p><strong>Admin:</strong> admin@gruporaca.com.br / admin123</p>
                <p><strong>Designer:</strong> designer@gruporaca.com.br / designer123</p>
                <p><strong>Fotógrafo:</strong> fotografo@gruporaca.com.br / fotografo123</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <Database size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black">Banco de Dados de Fotos</h1>
                <p className="text-sm text-gray-600">Gerencie e organize fotos dos cavalos</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User size={16} />
                <span>{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
              >
                <LogOut size={16} />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-black">Galeria de Fotos</h2>
              <p className="text-sm text-gray-600 mt-1">Total: {photos.length} fotos cadastradas</p>
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
            >
              <Upload size={16} />
              Upload Fotos
            </button>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar por animal, raça ou tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {photos
                .filter(photo => 
                  photo.animal_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  photo.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                )
                .map(photo => (
                <div key={photo.id} className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={photo.url} 
                      alt={photo.animal_name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                          <Eye size={16} className="text-black" />
                        </button>
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                          <Download size={16} className="text-black" />
                        </button>
                        {(user?.role === 'admin' || user?.role === 'photographer') && (
                          <button className="p-2 bg-red-500/90 backdrop-blur-sm rounded-lg hover:bg-red-600 transition-colors">
                            <Trash2 size={16} className="text-white" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-black mb-1">{photo.animal_name}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {photo.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{photo.size}</span>
                      <span>{new Date(photo.uploaded_at).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Por: {photo.uploaded_by}</p>
                  </div>
                </div>
              ))}
            </div>

            {photos.length === 0 && (
              <div className="text-center py-12">
                <Database size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 font-medium">Nenhuma foto cadastrada</p>
                <p className="text-sm text-gray-500 mt-1">Comece fazendo upload de fotos dos cavalos</p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-black">{photos.length}</p>
                <p className="text-sm text-gray-600">Total de Fotos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">{new Set(photos.map(p => p.animal_id)).size}</p>
                <p className="text-sm text-gray-600">Animais com Fotos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">
                  {(photos.reduce((sum, p) => {
                    const sizeNum = parseInt(p.size.replace(/[^0-9]/g, ''));
                    return sum + (isNaN(sizeNum) ? 0 : sizeNum);
                  }, 0) / 1024).toFixed(1)} MB
                </p>
                <p className="text-sm text-gray-600">Espaço Utilizado</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal de Upload */}
      <Modal isOpen={showUploadModal} onClose={() => setShowUploadModal(false)} title="Upload de Fotos">
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome do Animal</label>
            <input 
              name="animal_name" 
              type="text" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none" 
              placeholder="Ex: Thunder"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">ID do Animal (opcional)</label>
            <input 
              name="animal_id" 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none" 
              placeholder="Ex: 001"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fotos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-black transition-colors">
              <input 
                type="file" 
                name="photos" 
                multiple 
                accept="image/*" 
                required 
                className="hidden" 
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <ImageIcon size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm font-medium text-gray-700 mb-1">Clique para selecionar fotos</p>
                <p className="text-xs text-gray-500">ou arraste e solte aqui</p>
                <p className="text-xs text-gray-400 mt-2">Formatos: JPG, PNG, WEBP (máx. 10MB por foto)</p>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tags (separadas por vírgula)</label>
            <input 
              name="tags" 
              type="text" 
              placeholder="Ex: Mangalarga, Macho, Perfil" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none" 
            />
            <p className="text-xs text-gray-500 mt-1">Adicione tags para facilitar a busca</p>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => setShowUploadModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Cancelar
            </button>
            <button type="submit" className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              <Upload size={16} className="inline mr-2" />
              Fazer Upload
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

