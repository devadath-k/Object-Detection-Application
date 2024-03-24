FROM node

WORKDIR /detection/src/app 

COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn install

RUN yarn build

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]