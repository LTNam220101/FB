import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {LIKE_POST} from '../../actions';

const likePostUrl = `/posts/like-post`;

function likePost(payload) {
  return axios.post(likePostUrl, payload);
}

function* doLikePost(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(likePost, request.payload);
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

export default function* watchLikePost() {
  yield takeLatest(LIKE_POST, doLikePost);
}
