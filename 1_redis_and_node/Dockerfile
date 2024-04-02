# This 'Dockerfile' is used by the 'node-app' service in 'docker-compose.yml'
FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

# Copy all(first dot) files to the build context(second dot.)
# Build context is provided when you provide the 'docker build command <directory>' e.g. 'docker build -t ankur1 .' The last dot is the context (= current directory).
COPY . . 

CMD ["npm","start"]