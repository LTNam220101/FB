import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {GET_REQUESTS} from '../../actions';

const getRequestsUrl = `/friends/get-requested-friends`;

function getRequests() {
  return axios.get(getRequestsUrl);
}

function* doGetRequests(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getRequests);
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

export default function* watchGetRequests() {
  yield takeLatest(GET_REQUESTS, doGetRequests);
}
