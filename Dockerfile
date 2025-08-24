FROM oven/bun:latest
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY tsconfig.json app.config.ts ./
COPY public/ ./public/
COPY src/ ./src/
RUN bun run build

USER bun
EXPOSE 80
ENTRYPOINT [ "bun", "--bun", "start", "--port", "80" ]
