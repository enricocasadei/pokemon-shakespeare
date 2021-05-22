### Pokemon & Shakespeare

This project has been develop starting from scratch using webpack, React, typescript, styled-components and Docker.
There is a simple engine that given a Pokemon name returns its Shakespearean description. There is also the possibility to add a Pokemon to the list of your favorite!

## Prerequisites

Install the following dependencies

1. Node (lts)
2. Docker (optional)

## Installation

Run ```yarn``` or ```npm i``` to install the project and get ready to start.

## Start with docker

Build a Docker image using it

```docker build --rm -t pokemon-shakespeare .```

Run the Docker image to run the container for the app

```docker run -p 8080:8080 pokemon-shakespeare```

On localhost:8080 it is available the app build

## Development

To develop run ```yarn start``` or ```npm start``` and you can find the website at localhost:8080 with hot reload enabled.