FROM node:18.19.1-alpine3.18

WORKDIR /server

COPY ../package.json ./
COPY ../yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "socketStart"]