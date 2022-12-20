import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { GET_AVATAR } from "./../../actions";

const signupUrl = `/user/get-avatar-original`;

function getAvatar() {
  return axios.get(signupUrl);
}

function* doGetAvatar(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getAvatar);
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

export default function* watchGetAvatar() {
  yield takeLatest(GET_AVATAR, doGetAvatar);
}
