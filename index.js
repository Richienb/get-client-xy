/**
 * get clientY/clientY from event
 *
 * @module get-client-xy
 *
 * @param {Event} e Event raised, like mousemove
 *
 * @return {number} Coordinate relative to the screen
 */
function getClientY (e, idx) {
	idx = idx || 0;

	// touch event
	if (e.targetTouches && (e.targetTouches.length >= 1)) {
		return e.targetTouches[idx].clientY;
	}

	// mouse event
	return e.clientY;
}
function getClientX (e, idx) {
	idx = idx || 0;

	// touch event
	if (e.targetTouches && (e.targetTouches.length >= 1)) {
		return e.targetTouches[idx].clientX;
	}

	// mouse event
	return e.clientX;
}

function getClientXY (e, idx) {
	return [getClientX(e, idx), getClientY(e, idx)];
}

getClientXY.x = getClientX;
getClientXY.y = getClientY;

module.exports = getClientXY;