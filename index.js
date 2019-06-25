/**
 * Get clientY/clientY from an event.
 * If index is passed, treat it as index of global touches, not the targetTouches.
 * Global touches include target touches.
 *
 * @module get-client-xy
 */

function getClientY(e){
    // touch event
    if(e.touches){
        if(e.touches.length && e.targetTouches.length)
            return e.targetTouches[0].clientY;
        else
            return e.changedTouches[0].clientY;
    }

    // mouse event
    return e.clientY;
}

function getClientX(e){
    // touch event
    if(e.touches){
        if(e.touches.length && e.targetTouches.length)
            return e.targetTouches[0].clientX;
        else
            return e.changedTouches[0].clientX;
    }

    // mouse event
    return e.clientX;
}

/**
 *
 * @param {Event} e Event raised, like mousemove
 *
 * @return {number[]} Coordinate relative to the screen
 */
function getClientXY(e){
    // Fetch originalEvent if the is one
    if(e.originalEvent)
        e = e.originalEvent;
    else if(e.detail && typeof e.detail === 'object' && e.detail.originalEvent)
        e = e.detail.originalEvent;

    return [getClientX(e), getClientY(e)];
}

getClientXY.x = getClientX;
getClientXY.y = getClientY;

module.exports = getClientXY;