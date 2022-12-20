import {combineReducers} from '@reduxjs/toolkit';
import { LoginResult } from '../components/LoginPage/reducers';
import { RegisterResult } from '../components/SignupPage/reducers';
import { GetAvatarResult } from '../global-actions/getAvatar/reducers';
import { GetCoverResult } from '../global-actions/getCover/reducers';

const rootReducer = combineReducers({
  loginResult: LoginResult,
  registerResult: RegisterResult,
  getAvatarResult: GetAvatarResult,
  getCoverResult: GetCoverResult
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
