# 🚀 Guia de Deploy para Hostinger

Este guia explica como fazer o deploy do site Grupo Raça para a Hostinger.

## 📋 Pré-requisitos

1. **Credenciais FTP da Hostinger**
   - Host FTP (ex: `ftp.gruporaca.com.br` ou `ftp.hostinger.com`)
   - Usuário FTP
   - Senha FTP
   - Caminho no servidor (geralmente `/public_html`)

2. **Node.js e npm instalados** (para build)

## 🔧 Método 1: Deploy Automático (Windows PowerShell)

### Passo 1: Configurar credenciais

Edite o arquivo `deploy-config.ps1` e preencha suas credenciais:

```powershell
$env:FTP_HOST = "ftp.seusite.com"
$env:FTP_USER = "seu_usuario"
$env:FTP_PASS = "sua_senha"
$env:FTP_PATH = "/public_html"
```

### Passo 2: Executar deploy

```powershell
# Carregar configurações
. .\deploy-config.ps1

# Executar deploy
.\deploy.ps1 -FtpHost $env:FTP_HOST -FtpUser $env:FTP_USER -FtpPass $env:FTP_PASS -FtpPath $env:FTP_PATH
```

**OU** execute diretamente com as credenciais:

```powershell
.\deploy.ps1 -FtpHost "ftp.seusite.com" -FtpUser "usuario" -FtpPass "senha" -FtpPath "/public_html"
```

## 🔧 Método 2: Deploy Automático (Linux/Mac)

### Passo 1: Instalar lftp (se necessário)

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update && sudo apt-get install -y lftp
```

**macOS:**
```bash
brew install lftp
```

### Passo 2: Executar deploy

```bash
# Dar permissão de execução
chmod +x deploy.sh

# Executar com credenciais
FTP_HOST="ftp.seusite.com" FTP_USER="usuario" FTP_PASS="senha" FTP_PATH="/public_html" ./deploy.sh
```

## 🔧 Método 3: Deploy Manual (FileZilla/WinSCP)

### Passo 1: Build do projeto

```bash
npm run build
```

Isso criará a pasta `dist` com todos os arquivos otimizados.

### Passo 2: Conectar via FTP

1. Abra **FileZilla** ou **WinSCP**
2. Conecte-se ao servidor:
   - **Host:** `ftp.seusite.com` (ou o host fornecido pela Hostinger)
   - **Usuário:** Seu usuário FTP
   - **Senha:** Sua senha FTP
   - **Porta:** 21 (ou 22 para SFTP)

### Passo 3: Upload dos arquivos

1. Navegue até a pasta `/public_html` no servidor
2. **Delete todos os arquivos antigos** (se houver)
3. Faça upload de **TODOS os arquivos** da pasta `dist` para `/public_html`
4. Certifique-se de que o arquivo `.htaccess` também foi enviado

### Passo 4: Verificar

Acesse seu site no navegador para verificar se está funcionando.

## 📝 Configurações Importantes

### Arquivo .htaccess

O arquivo `.htaccess` já está configurado para:
- ✅ Redirecionar todas as rotas para `index.html` (necessário para React Router)
- ✅ Compressão GZIP para melhor performance
- ✅ Cache de arquivos estáticos
- ✅ Segurança básica

### Estrutura de Arquivos no Servidor

Após o deploy, a estrutura deve ser:

```
/public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── [outros arquivos estáticos]
```

## 🔍 Verificação Pós-Deploy

1. ✅ Acesse o site no navegador
2. ✅ Teste todas as páginas e funcionalidades
3. ✅ Verifique se as imagens estão carregando
4. ✅ Teste em dispositivos móveis
5. ✅ Verifique o console do navegador para erros

## 🐛 Solução de Problemas

### Erro 404 em rotas

**Problema:** Ao acessar rotas diretamente, aparece erro 404.

**Solução:** Certifique-se de que o arquivo `.htaccess` foi enviado para o servidor e está na raiz do `public_html`.

### Imagens não carregam

**Problema:** Imagens não aparecem no site.

**Solução:** 
- Verifique se todas as imagens da pasta `public` foram copiadas para `dist`
- Verifique os caminhos das imagens no código (devem começar com `/`)

### Site não atualiza

**Problema:** Mudanças não aparecem após o deploy.

**Solução:**
- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
- Verifique se os arquivos foram realmente enviados
- Aguarde alguns minutos (pode haver cache no servidor)

### Erro de permissão

**Problema:** Erro ao fazer upload de arquivos.

**Solução:**
- Verifique as permissões da pasta `/public_html` (deve ser 755)
- Verifique as permissões dos arquivos (devem ser 644)

## 📞 Suporte Hostinger

Se tiver problemas com o servidor FTP, entre em contato com o suporte da Hostinger:
- **Chat:** Disponível no painel hPanel
- **Email:** suporte@hostinger.com.br
- **Documentação:** https://www.hostinger.com.br/tutoriais

## 🔄 Atualizações Futuras

Para fazer atualizações no site:

1. Faça as alterações no código
2. Execute `npm run build`
3. Execute o script de deploy novamente
4. Os arquivos antigos serão substituídos pelos novos

---

**✨ Dica:** Mantenha um backup da pasta `dist` antes de cada deploy!

