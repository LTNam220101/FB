import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {CREATE_COMMENT} from './../../actions';

const createCommentUrl = '/comment';

function createComment(payload: Record<string, unknown>) {
  return axios.post(createCommentUrl, payload);
}

function* doCreateComment(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(createComment, request.payload!);
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

export default function* watchGetUserPosts() {
  yield takeLatest(CREATE_COMMENT, doCreateComment);
}
