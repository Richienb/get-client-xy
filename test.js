const test = require("ava")
const getClientXY = require(".")

require("browser-env")() // eslint-disable-line node/no-extraneous-require

test("main", t => {
	t.deepEqual(getClientXY(new MouseEvent("click", {
		clientX: 1,
		clientY: 2
	})), {
		x: 1,
		y: 2
	})

	t.deepEqual(getClientXY(new TouchEvent("click", {
		touches: [{
			clientX: 1,
			clientY: 2
		}],
		targetTouches: [{
			clientX: 1,
			clientY: 2
		}]
	})), {
		x: 1,
		y: 2
	})

	t.deepEqual(getClientXY(new TouchEvent("click", {
		touches: [],
		changedTouches: [{
			clientX: 1,
			clientY: 2
		}]
	})), {
		x: 1,
		y: 2
	})
})
