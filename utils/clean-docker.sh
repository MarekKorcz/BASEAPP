#! /bin/bash

docker container rm $(docker container ls -aq) -f
docker image rm baseapp_app -f
docker volume rm $(docker volume ls -q) -f
