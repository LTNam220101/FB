import {all} from 'redux-saga/effects';
import {login, logout, register} from './sagas/Authentication';
import {avatar, cover, updateProfile} from './sagas/Profile';
import {
  createPost,
  deleteAllPosts,
  deletePost,
  getAllPosts,
  getPost,
  getUserPosts,
} from './sagas/Post';
import {createComment} from './sagas/Comment';
import {
  cancelRequest,
  checkFriend,
  getListFriends,
  getRequests,
  removeFriend,
  sendRequest,
  setAccept,
} from './sagas/Friend';

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
    getPost(),
    updateProfile(),
    createComment(),
    checkFriend(),
    cancelRequest(),
    getListFriends(),
    getRequests(),
    removeFriend(),
    sendRequest(),
    setAccept(),
  ]);
}
