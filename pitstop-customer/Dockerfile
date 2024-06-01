# Stage 1: Base build image
FROM node:16.17.0-bullseye-slim AS builder
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=${NODE_ENV}
COPY . .

# Stage 2: Production image
FROM node:16.17.0-bullseye-slim
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app /usr/src/app
RUN chown -R node:node /usr/src/app
USER node
EXPOSE 3001
CMD ["npm", "start"]
