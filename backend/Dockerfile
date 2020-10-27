FROM alpine:3

COPY compile.sh /usr/local/bin

RUN chmod 754 /usr/local/bin/compile.sh

RUN apk add --no-cache \
    g++

# RUN mkdir -p /usr/app

WORKDIR /usr/app

ENTRYPOINT [ "compile.sh" ]