import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {CHECK_FRIEND} from '../../actions';

const checkFriendUrl = `/friends/status/`;

function checkFriend() {
  return axios.get(checkFriendUrl);
}

function* doCheckFriend(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(checkFriend);
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

export default function* watchCheckFriend() {
  yield takeLatest(CHECK_FRIEND, doCheckFriend);
}
