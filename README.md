## Commands

## Prerequisites

Install the following dependencies

1. Node (lts)
2. Docker (optional)


## Start with docker

Build a Docker image using it

```docker build --rm -t pokemon-shakespeare .```

Run the Docker image to run the container for the app

```docker run -p 8080:8080 pokemon-shakespeare```