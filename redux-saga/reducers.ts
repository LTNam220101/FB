import {combineReducers} from '@reduxjs/toolkit';
import {CreateCommentResult} from '../components/CommentModal/reducers';
import {CreatePostResult} from '../components/HomePage/reducers';
import {LoginResult} from '../components/LoginPage/reducers';
import {
  DeleteAllPostsResult,
  DeletePostResult,
  GetAllPostsResult,
  GetPostResult,
  LikePostResult,
} from '../components/News/reducers';
import {
  CancelRequestResult,
  CheckFriendResult,
  CheckUserResult,
  GetListFriendsResult,
  GetRequestsResult,
  GetUserPostsResult,
  RemoveFriendResult,
  SendRequestResult,
  SetAcceptResult,
  UpdateAvatarResult,
  UpdateCoverResult,
  UpdateProfileResult,
} from '../components/ProfilePage/reducers';
import {SearchResult} from '../components/SearchPage/reducers';
import {RegisterResult} from '../components/SignupPage/reducers';
import {GetAvatarResult} from '../global-actions/getAvatar/reducers';
import {GetCoverResult} from '../global-actions/getCover/reducers';

const rootReducer = combineReducers({
  loginResult: LoginResult,
  registerResult: RegisterResult,
  getAvatarResult: GetAvatarResult,
  getCoverResult: GetCoverResult,
  updateProfileResult: UpdateProfileResult,
  getAllPostsResult: GetAllPostsResult,
  getUserPostsResult: GetUserPostsResult,
  deleteAllPostsResult: DeleteAllPostsResult,
  deletePostResult: DeletePostResult,
  likePostResult: LikePostResult,
  createPostResult: CreatePostResult,
  getPostResult: GetPostResult,
  createCommentResult: CreateCommentResult,
  cancelRequestResult: CancelRequestResult,
  checkFriendResult: CheckFriendResult,
  getListFriendsResult: GetListFriendsResult,
  getRequestsResult: GetRequestsResult,
  removeFriendResult: RemoveFriendResult,
  sendRequestResult: SendRequestResult,
  setAcceptResult: SetAcceptResult,
  checkUserResult: CheckUserResult,
  updateAvatarResult: UpdateAvatarResult,
  updateCoverResult: UpdateCoverResult,
  searchResult: SearchResult,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
