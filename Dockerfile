# Используем официальный образ Node.js LTS (Long Term Support)
FROM node:20-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json yarn.lock* ./ 
# *yarn.lock* может не существовать, если используется npm

# --- Стадия зависимостей ---
FROM base AS deps
# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# --- Стадия сборки ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Собираем приложение Next.js
RUN yarn build

# --- Стадия Production ---
FROM base AS runner
WORKDIR /app

# Копируем файлы из стадии сборки
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Устанавливаем переменные окружения
ENV NODE_ENV production

EXPOSE 8080
# Запускаем приложение
CMD ["yarn", "run"]
