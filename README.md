# node-cjs

Provide `__dirname` and `__filename` for ESM packages.

## Installation

npm

```sh
npm install node-cjs
```

yarn

```sh
yarn add node-cjs
```

## Usage

```js
import cjs from "node-cjs";

const { __dirname, __filename } = cjs(import.meta);
```
