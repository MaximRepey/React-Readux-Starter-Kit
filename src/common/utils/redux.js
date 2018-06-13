import cuid from 'cuid'
import equals from 'shallow-equals'

export function createActions(actions, defaults) {
	return actions.reduce((actions, action) => {
		if (typeof action === 'string') action = { type: action }
		action = Object.assign({}, defaults, action)
		if (!action.act) {
			action.act = function(data) {
				return {
					type: this.type
				  , data
				  , date: new Date()
				  , _id: cuid()
				}
			}
		}
		let act = data => action.act(data)
		Object.assign(act, action)
		actions[action.type] = act
		return actions
	}, {})
}

export function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action, ...rest) {
		if (action.type === '@@redux/INIT') {
			if (!state) {
				state = initialState
			}
		}
		let handler = handlers[action.type]
		if (handler) {
			let x = handler(state, action, ...rest)
			if (!equals(x, state)) return x
		}
		return state
	}
}
