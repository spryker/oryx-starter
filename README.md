# Composable frontend

This is a minimal example of composable frontend application based on [Oryx framework](https://github.com/spryker/oryx).

See [the documentation](https://docs.spryker.com/docs/scos/dev/front-end-development/202307.0/oryx/getting-started/set-up-oryx.html) for installing Oryx or follow the steps below.

## Installation

Download the boilerplate project and install dependencies:

```shell
git clone https://github.com/spryker/oryx-starter
cd oryx-starter
npm i
```

### Configure your GLUE API:

There's a pre-configured API configured in the `.env` file as a fallback (`ORYX_FALLBACK_SCOS_BASE_URL`)
that you can replace with a project specific base url, using the `SCOS_BASE_URL`.

## Run application

To run the application, you run a single command:

`npm run dev`

The application gets available at [localhost:3000](http://localhost:3000), or the next available port on your machine.

> **NOTE** there's no SSR integration on this boilerplate yet, but will come soon.

## Build

`npm run build`

## Builders and bundlers for Oryx

The recommended build tool for Oryx is [Vite](https://vitejs.dev/). However, Oryx is compatible with a wide variety of build tools, like rollup, parcel or webpack. Since Oryx uses exports in every package to split logical parts to sub-packages, the build tool you choose must support [exporting entry points](https://nodejs.org/api/packages.html#package-entry-points) in `package.json`.
