# Stage 1: Build image
FROM node:20.13.1-bookworm-slim AS builder

ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de production
RUN npm ci --only=production

# Installer prom-client séparément si nécessaire
RUN npm install prom-client

# Copier le reste du code source
COPY . .

# Stage 2: Runtime image
FROM node:20.13.1-bookworm-slim

ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copier les fichiers depuis l'étape de build
COPY --from=builder /usr/src/app /usr/src/app

# S'assurer que les permissions sont correctes
RUN chown -R node:node /usr/src/app

# Utiliser un utilisateur non-root
USER node

# Exposer le port utilisé par l'application
EXPOSE 3001

# Commande de démarrage
CMD ["npm", "start"]
