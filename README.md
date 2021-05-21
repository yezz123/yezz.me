# Using this repository

You can run the website locally, or you can run it in a container runtime. We strongly recommend using the container runtime, as it gives deployment consistency with the live website.

## Prerequisites

To use this repository, you need the following installed locally:

- [npm](https://www.npmjs.com/)
- A container runtime, like [Docker](https://www.docker.com/).

Before you start, install the dependencies. Clone the repository and navigate to the directory:

```
git clone https://github.com/yezz123/yezz123.github.io.git
cd yezz123.github.io
```

## Running the website using a container

To build the site in a container, run the following to build the container image and run it:

```
make container-image
make container-serve
```

Open up your browser to http://localhost:1313 to view the website. As you make changes to the source files, the website updates and forces a browser refresh.

## To Do

- [X] Create my own blog to share my last updates on repositories.
- [X] Create Articles & WriteUps.
