import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { SEND_REQUEST } from "../../actions";

const sendRequestUrl = `/friends/set-request-friend`;

function sendRequest() {
  return axios.post(sendRequestUrl);
}

function* doSendRequest(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(sendRequest);
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

export default function* watchSendRequest() {
  yield takeLatest(SEND_REQUEST, doSendRequest);
}
