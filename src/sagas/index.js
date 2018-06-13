import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';

function* callAPI({ type, data }) {
	try{
		const response = yield call(fetch, data);
		yield put({type: 'FETCH_SUCCES', data: response})
	} catch (e) {
		yield put({type: 'FETCH_FAILURE', data: e})
	}
}

function* listenAPIActions() {
	yield* takeEvery('FETCH', callAPI);
}

export default function* root() {
	yield [
		fork(listenAPIActions)
	]
}
