# Composable frontend

This is a minimal example of composable frontend application based on [Oryx framework](https://github.com/spryker/oryx).

See [the documentation](https://docs.spryker.com/docs/scos/dev/front-end-development/202307.0/oryx/getting-started/set-up-oryx.html) for installing Oryx or follow the steps below.

## Tech Stack
Oryx is built on the following main stack:
- <img width='25' height='25' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'/> [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/1612/bynNY5dJ.jpg' alt='TypeScript'/> [TypeScript](http://www.typescriptlang.org) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/2748/default_5dfbb146cf22182bca88c7d07f2515a5888fc12a.jpg' alt='Netlify'/> [Netlify](https://www.netlify.com/) – Static Web Hosting
- <img width='25' height='25' src='https://img.stackshare.io/service/4631/default_c2062d40130562bdc836c13dbca02d318205a962.png' alt='Shell'/> [Shell](https://en.wikipedia.org/wiki/Shell_script) – Shells

Full tech stack [here](/techstack.md)

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
