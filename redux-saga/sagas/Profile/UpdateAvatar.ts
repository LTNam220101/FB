import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {UPDATE_AVATAR} from '../../actions';
import {Platform} from 'react-native-web';

const avatarUrl = `/user/save-avatar`;

function getAvatar(payload) {
  const formData = new FormData();
  const {avatar} = payload;
  const upload_body = {
    uri: avatar['path'],
    type: avatar['mime'],
    name:
      Platform.OS === 'ios'
        ? avatar['filename']
        : `my_profile_${Date.now()}.${
            avatar['mime'] === 'image/jpeg' ? 'jpg' : 'png'
          }`,
  };
  formData.append('image', upload_body as unknown as Blob);
  return axios.post(avatarUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* doGetAvatar(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getAvatar, request.payload!);
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

export default function* watchGetAvatar() {
  yield takeLatest(UPDATE_AVATAR, doGetAvatar);
}
