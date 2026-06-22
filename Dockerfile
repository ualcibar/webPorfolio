# Usamos una imagen limpia de Node.js
FROM node:20-alpine
WORKDIR /app

# Copiamos el package.json
COPY package*.json ./

# Forzamos una instalación limpia sin importar si falta el lockfile
RUN npm install --no-audit --no-fund

# Copiamos el resto de tus archivos (src, nginx, etc.)
COPY . .

# Compilamos Next.js
RUN npm run build

# Exponemos el puerto interno
EXPOSE 3000

# Encendemos la app
CMD ["npm", "start"]