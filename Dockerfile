# use an existing Docker image as a base
FROM alpine

# download and install a dependency
RUN apk add --update redis

# tell the image what command to run when it starts as a container
CMD ["redis-server"]
