#!/bin/sh

set -e

timeout_duration=$1
volume_name=$2
image_name=$3

shift 3

container_id=$(docker run -d --memory="256m" --volume $volume_name:/usr/temp:ro $image_name $@)

# blocking process to prevent killing the container immediately

{ timeout $timeout_duration docker wait $container_id || exit_code=$?; } &>/dev/null

# we're not interested in the output of the command
docker kill $container_id &>/dev/null || true

docker logs $container_id

{ docker container rm $container_id; } &>/dev/null

if [ ! -z $exit_code ]; then
    echo "timed out"
fi

# if [ -z $exit_code ]; then
#     echo "success"
# else
#     echo "timed out"
# fi
