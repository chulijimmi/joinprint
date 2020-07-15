import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import materialSaga from "./materialSaga";
export default function* () {
  yield all([userSaga(), materialSaga()]);
}
