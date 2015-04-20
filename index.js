/**
 * get clientY/clientY from event
 *
 * @module get-client-xy
 *
 * @param {Event} e Event raised, like mousemove
 *
 * @return {number} Coordinate relative to the screen
 */
function getClientY (e) {
	// touch event
	if (e.targetTouches && (e.targetTouches.length >= 1)) {
		return e.targetTouches[0].clientY;
	}

	// mouse event
	return e.clientY;
}
function getClientX (e) {
	// touch event
	if (e.targetTouches && (e.targetTouches.length >= 1)) {
		return e.targetTouches[0].clientX;
	}

	// mouse event
	return e.clientX;
}

function getClientXY (e) {
	return [getClientX(e), getClientY(e)];
}

getClientXY.x = getClientX;
getClientXY.y = getClientY;

module.exports = getClientXY;