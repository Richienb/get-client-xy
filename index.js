/**
 * Get clientY/clientY from an event.
 * If index is passed, treat it as index of global touches, not the targetTouches.
 * It is because global touches are more generic.
 *
 * @module get-client-xy
 *
 * @param {Event} e Event raised, like mousemove
 *
 * @return {number} Coordinate relative to the screen
 */
function getClientY (e, idx) {
	// touch event
	if (e.touches) {
		if (arguments.length > 1) {
			return e.touches[idx].clientY;
		}
		else {
			return e.targetTouches[0].clientY;
		}
	}

	// mouse event
	return e.clientY;
}
function getClientX (e, idx) {
	// touch event
	if (e.touches) {
		if (arguments.length > 1) {
			return e.touches[idx].clientX;
		}
		else {
			return e.targetTouches[0].clientX;
		}
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