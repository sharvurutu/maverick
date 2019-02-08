#!/bin/bash

CONTAINERS=$(docker ps | grep 8086 | awk '{print $1}')
BROKERS=$(for CONTAINER in ${CONTAINERS}; do docker port "$CONTAINER" 8086 | sed -e "s/0.0.0.0:/$HOST_IP:/g"; done)
echo "${BROKERS/$'\n'/,}"
