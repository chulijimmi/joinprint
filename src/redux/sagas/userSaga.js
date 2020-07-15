import { all, fork, takeEvery, call, put, select } from "redux-saga/effects";
import {
  SAGA_LOGIN_USER,
  SAGA_GET_USER,
  setUser,
  setErrorUser,
  setProfileUser,
  SAGA_SIGN_OUT,
  setSignOut,
} from "../actions/usersAction";
import { signIn, getProfile } from "../../api/users";
import AsyncStorage from "@react-native-community/async-storage";

function* __doSignOut() {
  try {
    yield call(AsyncStorage.removeItem, "token");
    yield put(setSignOut());
    //Request api to signout
  } catch (error) {
    throw error;
  }
}
function* __doLoginUser(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(signIn, username, password);
    if (response.error) {
      yield put(setErrorUser(response));
    } else {
      yield put(setUser(response.access_token));
      yield call(AsyncStorage.setItem, "token", response.access_token);
    }
  } catch (error) {
    throw error;
  }
}

export function* __doGetUser() {
  try {
    const token = yield select((state) => state.users.token);
    const response = yield call(getProfile, token);
    console.log("__doGetUser", response);
    yield put(setProfileUser(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* doSignOut() {
  yield takeEvery(SAGA_SIGN_OUT, __doSignOut);
}

export function* doLoginUser() {
  yield takeEvery(SAGA_LOGIN_USER, __doLoginUser);
}

export function* doGetUser() {
  yield takeEvery(SAGA_GET_USER, __doGetUser);
}

export default function* rootSaga() {
  yield all([fork(doLoginUser), fork(doGetUser), fork(doSignOut)]);
}
