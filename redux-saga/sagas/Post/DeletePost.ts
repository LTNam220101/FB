import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {DELETE_POST} from '../../actions';

const deletePostUrl = `/posts/delete-post`;

function deletePost(payload: any) {
  return axios.post(deletePostUrl, payload);
}

function* doDeletePost(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(deletePost, request.payload);
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

export default function* watchDeletePost() {
  yield takeLatest(DELETE_POST, doDeletePost);
}
