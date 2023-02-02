import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {CANCEL_REQUEST} from '../../actions';

const cancelRequestUrl = `/friends/cancel-request`;

function cancelRequest(payload: any) {
  return axios.post(cancelRequestUrl, payload);
}

function* doCancelRequest(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(cancelRequest, request.payload);
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

export default function* watchCancelRequest() {
  yield takeLatest(CANCEL_REQUEST, doCancelRequest);
}
