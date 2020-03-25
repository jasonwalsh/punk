FROM node:lts-alpine
WORKDIR /srv
COPY package.json yarn.lock ./
RUN yarn global add --silent @vue/cli serve
RUN yarn install
COPY . .
RUN yarn build
CMD [ "serve", "-l", "8080", "-s", "dist" ]
