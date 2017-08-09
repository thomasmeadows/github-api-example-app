FROM node

RUN mkdir /src
VOLUME ['/src']
WORKDIR /src

# Document that the service listens on ports.

EXPOSE 80
EXPOSE 443
EXPOSE 8000
