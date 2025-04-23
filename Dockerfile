# Используем официальный образ Node.js LTS (Long Term Support)
FROM node:18-alpine AS base

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

ENV NODE_ENV=production
# Uncomment the following line in case you need sharp support
# RUN apk add --no-cache vips

# Копируем собранные файлы из стадии сборки
COPY --from=builder /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./ 
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Устанавливаем пользователя non-root
USER node

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

# Устанавливаем переменную окружения для порта
ENV PORT 3000

# Команда для запуска приложения
CMD ["node", "server.js"]