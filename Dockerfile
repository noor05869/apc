#base Image
FROM node:14
#current working directory in container
WORKDIR /app
#copy the package.json file in the /app directory
COPY package.json ./
#copy everything in the directory into the container
COPY ./ ./
#install node modules
RUN npm i
#the command to run whenever this container is provisioned
CMD ["npm", "run", "start"]
