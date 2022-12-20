import {all} from 'redux-saga/effects';
import {login, logout, register} from './sagas/Authentication';
import { avatar } from './sagas/Profile';

export default function* rootSaga() {
  yield all([login(), register(), logout(), avatar()]);
}
