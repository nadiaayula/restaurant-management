# === STAGE 1: Proses Build/Kompilasi Aplikasi ===
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 📥 TANGKAP SECRET DARI GITHUB ACTIONS DI SINI
ARG DOCKER_PUBLIC_API_ENDPOINT
ENV DOCKER_PUBLIC_API_ENDPOINT=$DOCKER_PUBLIC_API_ENDPOINT

# Kompilasi React/Vite menjadi file statis (HTML, CSS, JS) di folder /app/dist atau /app/build
RUN npm run build

# === STAGE 2: Menyajikan File Statis Pakai Nginx ===
FROM nginx:alpine

# Salin hasil kompilasi dari stage builder ke dalam folder publik Nginx
# Catatan: Kalau proyekmu pakai Vite, biasanya foldernya bernama 'dist'. 
# Kalau pakai Create React App biasa, ganti 'dist' di bawah menjadi 'build'.
COPY --from=builder /app/dist /usr/share/nginx/html

# Ekspos port bawaan Nginx (port 80) ke dunia luar
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]