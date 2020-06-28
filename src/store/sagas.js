import { all, debounce, put, call } from 'redux-saga/effects';
import { UPDATE_PRICE, UPDATE_TOTAL, UPDATE_UNITS } from '../constants';

const updateValue = (action) => new Promise(res => setTimeout(() => res({...action, type: `${action.type}_FINISHED` }), 500));


function* changeField(action) {
  const fetchedAction = yield call(updateValue, action);
  yield put(fetchedAction);
}

export function* debounceChangeField() {
  yield debounce(500, [UPDATE_PRICE, UPDATE_TOTAL, UPDATE_UNITS], changeField);
};

export default function* rootSaga() {
  yield all([
    debounceChangeField()
  ])
}