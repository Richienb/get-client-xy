const getOriginalEvent = event => {
	// TODO: Replace with `return event?.originalEvent ?? event?.detail?.originalEvent ?? event` when targeting newer browsers
	if (event.originalEvent) {
		return event.originalEvent
	}

	if (event.detail && typeof event.detail === "object" && event.detail.originalEvent) {
		return event.detail.originalEvent
	}

	return event
}

const getClientLocation = (event, propertyName) => {
	if (event.touches) {
		if (event.touches.length > 0 && event.targetTouches.length > 0) {
			return event.targetTouches[0][propertyName]
		}

		return event.changedTouches[0][propertyName]
	}

	return event[propertyName]
}

const getClientXY = event => {
	event = getOriginalEvent(event)

	return {
		x: getClientLocation(event, "clientX"),
		y: getClientLocation(event, "clientY")
	}
}

module.exports = getClientXY
