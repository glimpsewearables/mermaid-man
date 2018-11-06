FROM node:7-alpine

RUN mkdir src
RUN mkdir src/app
WORKDIR ./src/app/

ENV PATH /src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g

CMD ["npm", "start"]