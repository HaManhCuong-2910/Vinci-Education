FROM node:20.19.0-alpine

# create work directory in app folder
WORKDIR /app

# copy over package.json files
COPY package.json ./

# install all depencies
RUN yarn install

COPY . .

# build the project
RUN yarn build

# run the build project with node
CMD ["node", ".output/server/index.mjs"]