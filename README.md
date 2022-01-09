### Pokemon & Shakespeare

Here it is a simple engine that given a Pokemon name returns its Shakespearean description with also the possibility to add a Pokemon to the list of your favorite.

It is accessible by keyboard only following the guideline of the [webaim](https://webaim.org/techniques/keyboard/#testing).

This project has been developed starting from scratch using Webpack, React, Typescript, styled-components and Docker. The webpage is responsive.

The Demo is available on GitHub pages [https://enricocasadei.github.io/pokemon-shakespeare/](https://enricocasadei.github.io/pokemon-shakespeare/)

## Prerequisites

Install the following dependencies

1. Node (lts)
2. Docker (optional)

## Installation

Run `yarn` or `npm i` to install the project and get ready to start.

## Start with docker

Build a Docker image using it

`docker build --rm -t pokemon-shakespeare .`

Run the Docker image to run the container for the app

`docker run -p 8080:8080 pokemon-shakespeare`

On localhost:8080 it is available the app built

N.B. "pokemon-shakespeare" is a custom name, whatever you choose is ok.

## Development

To develop run `yarn start` or `npm start` and you can find the website at localhost:8080 with hot reload enabled.
