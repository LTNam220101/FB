import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {GET_USER_POSTS} from './../../actions';

const userPostsUrl = '/posts/posts-by-user';

function getUserPosts(payload: Record<string, unknown>) {
  return axios.get(userPostsUrl, {
    params: {author: payload.author, take: 10, skip: 0},
  });
}

function* doGetUserPosts(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getUserPosts, request.payload!);
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
  yield takeLatest(GET_USER_POSTS, doGetUserPosts);
}
