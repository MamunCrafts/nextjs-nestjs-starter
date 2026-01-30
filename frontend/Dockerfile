# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2: Production
FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
RUN yarn install --frozen-lockfile

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

USER node

EXPOSE 3001

CMD ["yarn", "start"]
