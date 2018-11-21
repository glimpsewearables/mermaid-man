FROM node:8-alpine

COPY . .
RUN yarn install
WORKDIR client
RUN yarn install
RUN yarn run build
WORKDIR ..
EXPOSE 5000

CMD [ "yarn", "start" ]