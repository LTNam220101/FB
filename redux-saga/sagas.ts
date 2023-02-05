import {all} from 'redux-saga/effects';
import {login, logout, register} from './sagas/Authentication';
import {
  checkUser,
  updateAvatar,
  updateCover,
  updateProfile,
} from './sagas/Profile';
import {
  createPost,
  deleteAllPosts,
  deletePost,
  getAllPosts,
  getPost,
  getUserPosts,
  likePost,
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
    updateAvatar(),
    updateCover(),
    createPost(),
    getAllPosts(),
    getUserPosts(),
    deleteAllPosts(),
    deletePost(),
    likePost(),
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
    checkUser(),
  ]);
}
