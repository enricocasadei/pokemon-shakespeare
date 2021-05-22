FROM node:alpine3.11

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn

RUN yarn run build

#EXPOSE 9000

#CMD [ "yarn", "start" ]