# get-client-xy

Get coordinates from a mouse or touch event.

[![NPM Badge](https://nodei.co/npm/get-client-xy.png)](https://npmjs.com/package/get-client-xy)

## Install

```sh
npm install get-client-xy
```

## Usage

```js
const getClientXY = require("get-client-xy")

const [x, y] = getClientXY(event)
```

## API

### getClientXY(event)

#### event

Type: `MouseEvent | TouchEvent`

The event to extract the data from.
