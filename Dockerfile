# ==========================================
# ETAPA 1: Base comun con Node 20
# ==========================================
FROM node:20-alpine AS base

# ==========================================
# ETAPA 2: Instalacion de dependencias (deps)
# ==========================================
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiamos solo los archivos de dependencias
COPY package*.json ./

# Instalacion limpia incluyendo devDependencies (TypeScript, @types, etc.)
RUN npm install --no-audit --no-fund

# ==========================================
# ETAPA 3: Compilacion de la app (builder)
# ==========================================
FROM base AS builder
WORKDIR /app

# Traemos node_modules instalados en la etapa deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desactivamos telemetria para acelerar la compilacion
ENV NEXT_TELEMETRY_DISABLED=1

# Compilamos la aplicacion (generara .next/standalone)
RUN npm run build

# ==========================================
# ETAPA 4: Imagen final de produccion (runner)
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Crear usuario sin privilegios para mayor seguridad en produccion
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiamos SOLO los archivos optimizados desde la etapa 'builder'
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiamos al usuario seguro
USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Iniciamos directamente la app ligera con Node (sin npm start)
CMD ["node", "server.js"]