# specify a base image
FROM node:alpine

# put all files to WORKDIR inside container
# WORKDIR goes to the 'to' destination on COPY i.e: COPY ./ ./WORKDIR
WORKDIR /usr/app

# before installing dependencies copy everything from ./simpleweb to ./simpleweb
# else Docker will pick up nothing inside ./simpleweb when build the image.
# We manually specify files for Docker to add to image in addition to base image
COPY ./package.json ./
# is there are changes to ./package.json the step just above and all steps below rerun
# install dependencies
RUN yarn install
COPY ./ ./

# default command to run on container startup
CMD ["yarn", "start"]
