import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {GET_POST} from '../../actions';

const getPostUrl = `/posts/get-by-id`;

function getPost(payload: any) {
  return axios.post(getPostUrl, payload);
}

function* doGetPost(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getPost, request.payload);
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

export default function* watchGetPost() {
  yield takeLatest(GET_POST, doGetPost);
}
