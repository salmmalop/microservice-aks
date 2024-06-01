# build stage
FROM node:20.13.1-bookworm-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Set environment variable to bypass OpenSSL issue
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN npm run build

# production stage
FROM nginx:1.27.0-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]