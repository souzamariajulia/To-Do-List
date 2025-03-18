# Usa a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos para o container
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta da API
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]