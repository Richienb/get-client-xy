# Get clientX/clientY

`$ npm install get-client-xy`

```js
var getClientX = require('get-client-xy').x;
var getClientY = require('get-client-xy').y;

on(document, 'touch mousedown', function (e) {
	var clientX = getClientX(e);
	...
});
```

Pass optionally index as a second argument to getClient to retrieve touch by that index.


[![NPM](https://nodei.co/npm/get-client-xy.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/get-client-xy/)