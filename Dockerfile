# Stage 1: Build the React app
FROM node:20-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

WORKDIR /app/server
RUN npm run build

# Stage 2: Set up Express server
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=build /app/server/package*.json ./
RUN npm install

COPY --from=build /app/dist ./public
COPY --from=build /app/server/dist .

EXPOSE 5000

CMD ["node", "index.js"]