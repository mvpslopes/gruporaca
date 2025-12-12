#!/bin/bash

# Script de Deploy para Hostinger (Linux/Mac)
# Configuração FTP da Hostinger

FTP_HOST="${FTP_HOST:-}"
FTP_USER="${FTP_USER:-}"
FTP_PASS="${FTP_PASS:-}"
FTP_PATH="${FTP_PATH:-/public_html}"

echo "🚀 Iniciando deploy para Hostinger..."

# Verificar se as credenciais foram fornecidas
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ]; then
    echo "❌ Erro: Credenciais FTP não fornecidas!"
    echo ""
    echo "Uso: FTP_HOST='ftp.seusite.com' FTP_USER='usuario' FTP_PASS='senha' ./deploy.sh"
    echo ""
    echo "Ou configure as variáveis no arquivo deploy-config.sh"
    exit 1
fi

# Passo 1: Build do projeto
echo "📦 Construindo o projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer build do projeto!"
    exit 1
fi

echo "✅ Build concluído!"

# Passo 2: Verificar se a pasta dist existe
if [ ! -d "dist" ]; then
    echo "❌ Pasta 'dist' não encontrada!"
    exit 1
fi

# Passo 3: Upload via FTP usando lftp (mais confiável)
echo "📤 Fazendo upload dos arquivos..."

# Verificar se lftp está instalado
if ! command -v lftp &> /dev/null; then
    echo "⚠️  lftp não encontrado. Instalando..."
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install lftp
        else
            echo "❌ Por favor, instale o Homebrew primeiro: https://brew.sh"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v apt-get &> /dev/null; then
            sudo apt-get update && sudo apt-get install -y lftp
        elif command -v yum &> /dev/null; then
            sudo yum install -y lftp
        else
            echo "❌ Por favor, instale o lftp manualmente"
            exit 1
        fi
    fi
fi

# Upload usando lftp
lftp -c "
set ftp:ssl-allow no
set ftp:passive-mode yes
set ftp:list-options -a
open -u $FTP_USER,$FTP_PASS $FTP_HOST
cd $FTP_PATH
lcd dist
mirror --reverse --delete --verbose --exclude-glob .git*
quit
"

if [ $? -eq 0 ]; then
    echo "✅ Upload concluído com sucesso!"
    echo ""
    echo "🌐 Seu site está no ar!"
else
    echo "❌ Erro durante o upload!"
    echo ""
    echo "💡 Dica: Use um cliente FTP como FileZilla para fazer upload manual:"
    echo "   1. Abra FileZilla"
    echo "   2. Conecte-se a: $FTP_HOST"
    echo "   3. Usuário: $FTP_USER"
    echo "   4. Navegue até: $FTP_PATH"
    echo "   5. Faça upload de TODOS os arquivos da pasta 'dist'"
    exit 1
fi

echo ""
echo "✨ Deploy finalizado!"

