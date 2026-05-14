FROM node:22-alpine

WORKDIR /app

RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --config.confirmModulesPurge=false

COPY . .
RUN pnpm build

EXPOSE 8080

CMD ["pnpm", "start"]