#Image of Node.js
FROM node:20.18.0

# Create app directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# comand tu run the app
CMD [ "node", "server.js" ]


