# Composable frontend

This is a minimal example of composable frontend application based on [Oryx framework](https://github.com/spryker/oryx).

## Installation

Download the boilerplate project and install dependencies:

```shell
git clone https://github.com/spryker/composable-frontend && \
cd composable-frontend && \
npm i
```

## Configure your GLUE API:

Rename the `.env.template` to `.env`.

There's a pre-configured API that you could replace with your own Spryker backend.

## Run application

To run application:

`npm run dev`

The application gets available at [localhost:3000](http://localhost:3000).

> **NOTE** there's no SSR integration on this boilerplate yet, but will come soon.

## Build

`npm run build`

## Builders and bundlers for Oryx

The recommended build tool for Oryx is [Vite](https://vitejs.dev/). However, Oryx is compatible with a wide variety of build tools, like rollup, parcel or webpack. Since Oryx uses exports in every package to split logical parts to sub-packages, the build tool you choose must support [exporting entry points](https://nodejs.org/api/packages.html#package-entry-points) in `package.json`.
