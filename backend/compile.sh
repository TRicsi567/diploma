#!/bin/sh -x

g++ -o app ./main.c 2> error.log;

if [ $? -eq 0 ]; then
    rm ./error.log;
    ./app $@ 1> output.log;
    rm ./app;
fi

