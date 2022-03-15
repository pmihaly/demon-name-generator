FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --prod --frozen-lockfile

COPY . .

CMD [ "yarn", "start" ]