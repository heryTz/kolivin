FROM node:16-alpine as base

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm i

COPY . .

FROM base as dev

EXPOSE 3000

CMD [ "pnpm", "start:dev" ]
