FROM node:20.13.1-bookworm-slim

# Install curl
RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
USER node
CMD ["node", "server.js"]
