import { createAction } from "@reduxjs/toolkit";

/**
 * Set state list materials
 * @param {Object} response
 */
export const SET_LIST_MATERIALS = "materials/setList";
export const SAGA_LIST_MATERIALS = "materials/getList";

function prepareSetList(data, links, meta) {
  return {
    payload: {
      data,
      links,
      meta,
    },
  };
}

export const setList = createAction(SET_LIST_MATERIALS, prepareSetList);

/**
 * Set page
 */
function prepareGetList(page) {
  return {
    payload: {
      page,
    },
  };
}

export const getList = createAction(SAGA_LIST_MATERIALS, prepareGetList);

/**
 * Set Loading
 */
export const SET_LIST_LOADING = "materials/setLoading";

function prepareSetLoading(loading) {
  return {
    payload: {
      loading,
    },
  };
}
export const setLoading = createAction(SET_LIST_LOADING, prepareSetLoading);

/**
 * Load default materials list data
 */
export const SAGA_RESET_LIST = "materials/resetList";
export const resetList = createAction(SAGA_RESET_LIST);

export const SET_RESET_LIST = "materials/setResetList";
function prepareSetResetList(data, links, meta) {
  return {
    payload: {
      data,
      links,
      meta,
    },
  };
}

export const setResetList = createAction(SET_RESET_LIST, prepareSetResetList);

/**
 * Search Action
 * @param {String} searchKey
 */
function prepareSearchList(searchKey) {
  return {
    payload: {
      searchKey,
    },
  };
}
export const SAGA_SEARCH_LIST = "materials/sagaSearchList";
export const searchList = createAction(SAGA_SEARCH_LIST, prepareSearchList);

/**
 * Set search list
 * @param {Array} data
 */
function prepareSetSearchList(data) {
  return {
    payload: {
      data,
    },
  };
}
export const SET_SEARCH_LIST = "materials/setSearchList";
export const setSearchList = createAction(
  SET_SEARCH_LIST,
  prepareSetSearchList
);

/**
 * Set uuid
 * @param {String} uuid
 * @param {Boolean} selected
 */
function prepareSetTick(uuid, selected) {
  return {
    payload: {
      uuid,
      selected,
    },
  };
}
export const SET_TICK = "materials/setTick";
export const setTick = createAction(SET_TICK, prepareSetTick);

/**
 * Submit tick
 * @param {Array} data
 */
function prepareSubmitTick(data, navigation) {
  return {
    payload: {
      data,
      navigation,
    },
  };
}
export const SUMBIT_TICK = "materials/submitTick";
export const submitTick = createAction(SUMBIT_TICK, prepareSubmitTick);
/**
 * Set raw materials
 * @param {Array} data
 */
function prepareSetRaw(data) {
  return {
    payload: {
      data,
    },
  };
}
export const SET_RAW_MATERIALS = "materials/setRaw";
export const SAGA_RAW_MATERIALS = "materials/getRaw";
export const setRaw = createAction(SET_RAW_MATERIALS, prepareSetRaw);
export const getRaw = createAction(SAGA_RAW_MATERIALS);
