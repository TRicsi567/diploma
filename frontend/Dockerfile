FROM node:14.15.0-alpine3.12 as builder

WORKDIR /usr/app

COPY . .

RUN npm ci

RUN npm run build

FROM node:14.15.0-alpine3.12

WORKDIR /usr/app

COPY --from=builder /usr/app/build ./build

COPY --from=builder /usr/app/node_modules ./node_modules

COPY --from=builder /usr/app/server.js ./server.js

ENTRYPOINT [ "node" ]
CMD [ "server.js" ]