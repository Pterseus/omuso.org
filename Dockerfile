FROM oven/bun:1 AS build
WORKDIR /app

ARG BASE_URL
ARG DOMAIN_EN
ARG DOMAIN_ES

ENV BASE_URL=$BASE_URL
ENV DOMAIN_EN=$DOMAIN_EN
ENV DOMAIN_ES=$DOMAIN_ES

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts
COPY . .
RUN bun --bun run build

FROM oven/bun:1 AS production
WORKDIR /app

COPY --from=build /app/.output /app
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "--bun", "run", "/app/server/index.mjs" ]