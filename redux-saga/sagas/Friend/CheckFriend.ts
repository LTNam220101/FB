import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {CHECK_FRIEND} from '../../actions';

const checkFriendUrl = id => `/friends/status/${id}`;

function checkFriend(payload: any) {
  return axios.get(checkFriendUrl(payload.id));
}

function* doCheckFriend(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(checkFriend, request.payload);
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
