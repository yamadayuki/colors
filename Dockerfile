FROM node:10.15.3-alpine as base

RUN apk add --no-cache --no-cache yarn

WORKDIR /app

COPY ./package.json /app
COPY ./yarn.lock /app

RUN yarn

COPY . /app

RUN yarn build

FROM quay.io/yamadayuki/magnet:latest

COPY --from=base /app/build /app/production

ENV NODE_ENV production
