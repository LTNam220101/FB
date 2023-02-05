import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {CHECK_USER} from '../../actions';

const checkUserUrl = `/auth`;

function checkUser() {
  return axios.get(checkUserUrl);
}

function* doCheckUser(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(checkUser);
    yield put({
      type: request.response?.success?.type,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: response.data,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: request.response?.failure?.type,
      loading: false,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: error,
      },
    });
  }
}

export default function* watchCheckUser() {
  yield takeLatest(CHECK_USER, doCheckUser);
}
