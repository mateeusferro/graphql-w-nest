FROM node:22-alpine

WORKDIR /urs/src/app

COPY package*.json ./

RUN yarn install

COPY  . .

RUN yarn build
RUN yarn prisma generate

CMD ["node", "dist/main.js"]