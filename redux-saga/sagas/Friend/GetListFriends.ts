import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { GET_LIST_FRIENDS } from "../../actions";

const getListFriendsUrl = `/friends/get-user-friends`;

function getListFriends() {
  return axios.get(getListFriendsUrl);
}

function* doGetListFriends(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getListFriends);
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

export default function* watchGetListFriends() {
  yield takeLatest(GET_LIST_FRIENDS, doGetListFriends);
}
