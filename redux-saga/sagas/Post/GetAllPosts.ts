import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {GET_ALL_POSTS} from './../../actions';

const allPostsUrl = `/posts/all`;

function getAllPosts() {
  return axios.get(allPostsUrl);
}

function* doGetAllPosts(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getAllPosts);
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

export default function* watchGetAllPosts() {
  yield takeLatest(GET_ALL_POSTS, doGetAllPosts);
}
