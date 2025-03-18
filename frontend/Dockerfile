# Usa uma imagem do Node.js para build
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Compila o código do React
RUN npm run build

# Usa uma imagem mais leve para servir os arquivos estáticos
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]