FROM node:18.19.1-alpine3.18 AS builder

WORKDIR /client

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["yarn", "dev"]