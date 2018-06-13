import { createReducer } from 'utils/redux';
import * as R from 'ramda';

const initialState = {}

export default createReducer(initialState, {
	FETCH_SUCCESS: (state, action) => R.assoc(action.data.target, action.data.response)(state)
})
