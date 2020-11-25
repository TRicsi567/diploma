FROM alpine:3.12

RUN apk add --no-cache \
    g++

COPY ./src/client/compile_and_run.sh /usr/local/bin

RUN chmod 754 /usr/local/bin/compile_and_run.sh

WORKDIR /usr/app

ENTRYPOINT [ "compile_and_run.sh" ]