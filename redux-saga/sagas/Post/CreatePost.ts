import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {CREATE_POST} from './../../actions';
import {Platform} from 'react-native-web';

const createPostUrl = `/posts/create`;

function createPost(payload: Record<string, unknown>) {
  const formData = new FormData();
  if (payload.images && (payload.images as File[]).length) {
    for (let i = 0; i < (payload.images as File[]).length; i++) {
      const upload_body = {
        uri: payload.images[i]['path'],
        type: payload.images[i]['mime'],
        name:
          Platform.OS === 'ios'
            ? payload.images[i]['filename']
            : `my_profile_${Date.now()}.${
                payload.images[i]['mime'] === 'image/jpeg' ? 'jpg' : 'png'
              }`,
      };
      formData.append('images', upload_body as unknown as Blob);
    }
  }
  if (payload.video) {
    const upload_body = {
      uri: payload.video['path'],
      type: payload.video['mime'],
      name: `my_profile_${Date.now()}.mp4`,
    };
    formData.append('video', upload_body as unknown as Blob);
  }
  formData.append('content', payload.content as string);
  formData.append('status', '');
  return axios.post(createPostUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* doCreatePost(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(createPost, request.payload!);
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

export default function* watchCreatePost() {
  yield takeLatest(CREATE_POST, doCreatePost);
}
