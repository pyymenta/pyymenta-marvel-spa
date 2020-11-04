# Marvel API SPA

[![YourActionName Actions Status](https://github.com/pyymenta/pyymenta-marvel-spa/workflows/react-app-ci/badge.svg)](https://github.com/pyymenta/pyymenta-marvel-spa/actions)

A simple Single Page Application made with React, using the [Official Marvel API](https://developer.marvel.com).

## Demo

![Marvel App Demo](https://user-images.githubusercontent.com/13206817/98174810-379f0300-1ed4-11eb-9f53-90c56fab6566.gif)

You can try it by yourself [here](<https://trusting-einstein-34ff09.netlify.app>)

## Setup

### Pre requirements

* Yarn
* Marvel API KEYS(public and private)

First, install the dependencies

```sh
yarn install
```

then, you need to setup the `.env` file:

1. Rename the `.env-example` file to `.env`
2. Fill the variables with your own `private` and `public` api key

## Run the project locally

```sh
yarn start
```

## Storybook

You could also develop components individually using Storybook:

```sh
yarn storybook
```

### Production Build

```sh
yarn build-storybook
```

## Tests

To run the unit test, just run

```sh
yarn test
```

## Application build

```sh
yarn build
```

## Workflow

The project is already configured to run prettier and lint on every commit. If you want, you can also run these commands individually

### Prettier - code formatter

```sh
yarn format
```

### Lint

```sh
yarn lint
```

## License

Copyright (c) 2020 pyymenta

Marvel API SPA is licensed under the [MIT](./LICENSE) license.
