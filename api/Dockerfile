FROM node:lts-alpine3.15

WORKDIR /api

COPY package.json package-lock.json /api/

RUN npm install

COPY . /api

CMD ["npm", "run", "start"]