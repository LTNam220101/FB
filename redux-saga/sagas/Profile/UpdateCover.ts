import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {UPDATE_COVER} from '../../actions';
import {Platform} from 'react-native-web';

const coverUrl = `/user/save-cover`;

function getCover(payload) {
  const formData = new FormData();
  const {cover} = payload;
  const upload_body = {
    uri: cover['path'],
    type: cover['mime'],
    name:
      Platform.OS === 'ios'
        ? cover['filename']
        : `my_profile_${Date.now()}.${
            cover['mime'] === 'image/jpeg' ? 'jpg' : 'png'
          }`,
  };
  formData.append('image', upload_body as unknown as Blob);
  return axios.post(coverUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* doGetCover(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getCover, request.payload);
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

export default function* watchGetCover() {
  yield takeLatest(UPDATE_COVER, doGetCover);
}
