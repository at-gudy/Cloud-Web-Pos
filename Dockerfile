from node:10.16.3-alpine

RUN mkdir -p /workspace
COPY package.json /workspace
WORKDIR /workspace
RUN npm install

COPY src /workspace
COPY tools /workspace
COPY views /workspace

RUN npm run build

ENTRYPOINT npm run serve