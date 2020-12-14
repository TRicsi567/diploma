#!/bin/sh

set -e

path=$1

shift 1

g++ -o app $path || exit_code=$?

if [ -z $exit_code ]; then
    ./app $@
else
    exit 1
fi
