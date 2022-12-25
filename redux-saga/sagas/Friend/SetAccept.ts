import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { SET_ACCEPT } from "../../actions";

const setAcceptUrl = `/friends/set-accept-friend`;

function setAccept() {
  return axios.post(setAcceptUrl);
}

function* doSetAccept(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(setAccept);
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

export default function* watchSetAccept() {
  yield takeLatest(SET_ACCEPT, doSetAccept);
}
