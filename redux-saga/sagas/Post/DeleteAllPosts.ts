import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { DELETE_ALL_POSTS } from "../../actions";

const deleteAllPostsUrl = `/posts`;

function deleteAllPosts() {
  return axios.delete(deleteAllPostsUrl);
}

function* doDeleteAllPosts(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(deleteAllPosts);
    yield put({
      type: request.response?.success?.type,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: response.data
      }
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: request.response?.failure?.type,
      loading: false,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: error
      }
    });
  }
}

export default function* watchDeleteAllPosts() {
  yield takeLatest(DELETE_ALL_POSTS, doDeleteAllPosts);
}
