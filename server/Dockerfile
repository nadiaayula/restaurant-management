# ---- Development ----
FROM node:20

WORKDIR /app

# Copy package.json trước để tận dụng cache
COPY package*.json ./

# Cài dependencies (chỉ cần 1 trong 2: npm ci hoặc npm install)
RUN npm ci

# Copy toàn bộ source code + prisma
COPY . .

# Prisma generate client
RUN npx prisma generate

EXPOSE 4000

# Chạy development mode (hot reload)
CMD ["npm", "run", "dev"]
