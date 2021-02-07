/// <reference lib="dom"/>

/**
Get coordinates from a mouse or touch event.

@param event The event to extract the data from.

@example
```
import getClientXY from "get-client-xy"

const [x, y] = getClientXY(event)
```
*/
declare function getClientXY(event: MouseEvent | TouchEvent): [
	x: number,
	y: number
]

export default getClientXY
