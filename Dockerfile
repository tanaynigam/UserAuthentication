FROM node:8

#create app directory
WORKDIR /usr/src/app

#Install app dependencies
#wildcard
#where available
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]

