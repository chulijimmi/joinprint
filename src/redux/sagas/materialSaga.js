import {
  all,
  fork,
  take,
  takeEvery,
  call,
  put,
  select,
  takeLatest,
  join,
} from "redux-saga/effects";
import {
  SAGA_LIST_MATERIALS,
  setList,
  SAGA_RAW_MATERIALS,
  setRaw,
  setLoading,
  SAGA_RESET_LIST,
  setResetList,
  SAGA_SEARCH_LIST,
  setSearchList,
  SAGA_GET_TICK_TOTAL,
  SUMBIT_TICK,
} from "../actions/materialActions";
import { listMaterials, retreiveMaterial } from "../../api/material";
import { __doGetUser } from "./userSaga";
import Navigate from "../../utils/navigate";
function* __doRawMaterial() {
  try {
    console.log("__doRawMaterial");
  } catch (error) {
    throw error;
  }
}

export function* doRawMaterial() {
  yield takeEvery(SAGA_RAW_MATERIALS, __doRawMaterial);
}

function* __doResetList() {
  yield put(setLoading(true));
  try {
    yield call(__doGetUser);
    const token = yield select((state) => state.users.token);
    const storeId = yield select((state) => state.users.profile.stores[0].uuid);
    const page = 1;
    const response = yield call(listMaterials, token, storeId, `${page}`);
    const { data, links, meta } = response;
    yield put(setResetList(data, links, meta));
  } catch (error) {
    throw error;
  }
  yield put(setLoading(false));
}

export function* doResetList() {
  yield takeEvery(SAGA_RESET_LIST, __doResetList);
}

function* __doListMaterial(action) {
  yield put(setLoading(true));
  try {
    yield call(__doGetUser);
    const token = yield select((state) => state.users.token);
    const storeId = yield select((state) => state.users.profile.stores[0].uuid);
    const currentPage = yield select((state) => state.materials.page);
    let page = currentPage === 0 ? 1 : currentPage + 1;
    const response = yield call(listMaterials, token, storeId, `${page}`);
    const { data, links, meta } = response;
    yield put(setList(data, links, meta));
  } catch (error) {
    throw error;
  }
  yield put(setLoading(false));
}

export function* doListMaterial() {
  yield takeEvery(SAGA_LIST_MATERIALS, __doListMaterial);
}

function* __doSearch(action) {
  try {
    const searchKey = action.payload.searchKey;
    const data = yield select((state) => state.materials.data);
    const resp = data.filter((item) => {
      if (item.nameEng) {
        const keySearch = searchKey.toLowerCase();
        const name = item.nameEng.toLowerCase();
        return name.indexOf(keySearch) > -1;
      }
    });
    yield put(setSearchList(resp));
  } catch (error) {
    throw error;
  }
}

export function* doSearch() {
  yield takeEvery(SAGA_SEARCH_LIST, __doSearch);
}

function* __doSubmitTick({ payload }) {
  try {
    const token = yield select((state) => state.users.token);
    const data = payload.data;
    let result = [];
    for (let i = 0; i < data.length; i++) {
      const uuid = data[i].uuid;
      const response = yield call(retreiveMaterial, token, uuid);
      if (response.data) {
        result.push(response.data);
      }
    }
    yield put(setRaw(result));
    const nav = new Navigate(payload.navigation);
    nav.push("RawScreen", data);
  } catch (error) {
    throw error;
  }
}

export function* doSubmitTick() {
  yield takeEvery(SUMBIT_TICK, __doSubmitTick);
}

export default function* rootSaga() {
  yield all([
    fork(doRawMaterial),
    fork(doListMaterial),
    fork(doResetList),
    fork(doSearch),
    fork(doSubmitTick),
  ]);
}
