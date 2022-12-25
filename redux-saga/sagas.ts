import {all} from 'redux-saga/effects';
import {login, logout, register} from './sagas/Authentication';
import {avatar, cover, updateProfile} from './sagas/Profile';
import {
  createPost,
  deleteAllPosts,
  deletePost,
  getAllPosts,
  getUserPosts,
} from './sagas/Post';

export default function* rootSaga() {
  yield all([
    login(),
    register(),
    logout(),
    avatar(),
    cover(),
    createPost(),
    getAllPosts(),
    getUserPosts(),
    deleteAllPosts(),
    deletePost(),
    updateProfile(),
  ]);
}
