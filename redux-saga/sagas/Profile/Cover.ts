import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { GET_COVER } from "./../../actions";

const coverUrl = `/user/get-cover-original`;

function getCover() {
  return axios.get(coverUrl);
}

function* doGetCover(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getCover);
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

export default function* watchGetCover() {
  yield takeLatest(GET_COVER, doGetCover);
}
