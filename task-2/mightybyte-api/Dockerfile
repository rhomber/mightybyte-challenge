# build environment
FROM node:14-alpine as node-build

WORKDIR /app

COPY src/ src/
COPY package*.json ./

RUN npm install
RUN npm run build

# server environment
FROM node:14-alpine

WORKDIR /app

COPY --from=node-build /app/build ./
COPY --from=node-build /app/node_modules ./node_modules/

EXPOSE 8080

CMD [ "node", "index.js" ]
