import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {REMOVE_FRIEND} from '../../actions';

const removeFriendUrl = `/friends/set-remove-friend`;

function removeFriend(payload: any) {
  return axios.put(removeFriendUrl, payload);
}

function* doRemoveFriend(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(removeFriend, request.payload);
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

export default function* watchRemoveFriend() {
  yield takeLatest(REMOVE_FRIEND, doRemoveFriend);
}
