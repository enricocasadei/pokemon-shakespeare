FROM node:12.8.0-alpine
WORKDIR /client
COPY . ./
RUN yarn
COPY . .
EXPOSE 8080
CMD yarn start