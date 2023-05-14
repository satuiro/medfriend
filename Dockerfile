FROM node:16-alpine

WORKDIR /app

COPY package.json ./

# RUN apk add --update --no-cache nodejs npm \
#     make \
#     g++ \
#     jpeg-dev \
#     cairo-dev \
#     giflib-dev \
#     pango-dev && \
RUN npm install -g node-gyp && \
    npm install
COPY . .

CMD [  "npm","run","dev" ]