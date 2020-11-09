FROM node:14.15.0-alpine3.12 as builder

WORKDIR /usr/app

COPY . .

RUN npm ci

RUN npm run build

FROM node:14.15.0-alpine3.12

RUN apk add --no-cache \
    docker-cli

WORKDIR /usr/app

COPY --from=builder /usr/app/build/server/main.js .

COPY --from=builder /usr/app/src/server/docker_timeout.sh /usr/local/bin

RUN chmod 754 /usr/local/bin/docker_timeout.sh

ENTRYPOINT [ "node" ]
CMD [ "main.js" ]