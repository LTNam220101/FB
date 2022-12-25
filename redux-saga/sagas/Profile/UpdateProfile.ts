import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "../../../interfaces";
import { UPDATE_PROFILE } from "../../actions";

const updateProfileUrl = `/user/update-profile`;

function updateProfile() {
  return axios.put(updateProfileUrl);
}

function* doUpdateProfile(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(updateProfile);
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

export default function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE, doUpdateProfile);
}
