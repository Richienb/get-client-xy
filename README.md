# Get clientXY

```js
import eToXy from 'get-client-xy';

document.addEventListener('touchstart', (event) =>{
    console.log(eToXy(event)); // -> [42, 142]
});

```

Fetches `event.originalEvent` or `event.detail.originalEvent` if there is one in an `event`.