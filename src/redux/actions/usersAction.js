import { nanoid, createAction } from "@reduxjs/toolkit";

export const SAGA_LOGIN_USER = "users/loginUser";
export const SET_USER = "users/setUser";
export const SET_ERROR_USER = "users/setErrorUser";
export const SAGA_GET_USER = "users/getUser";
export const SET_PROFILE_USER = "users/setProfileUser";
export const SAGA_SIGN_OUT = "users/signOut";
export const SET_SIGN_OUT = "users/setSignOut";

/**
 * Access token response from auth login api
 * @param {String} token
 */
function prepareUsersAction(token) {
  return {
    payload: {
      token,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  };
}

export const setUser = createAction(SET_USER, prepareUsersAction);

/**
 * Arg login action
 * @param {String} username
 * @param {String} password
 */
function prepareLoginAction(username, password) {
  return {
    payload: {
      username,
      password,
    },
  };
}

export const loginUser = createAction(SAGA_LOGIN_USER, prepareLoginAction);

/**
 * Response from login on error case or failed login
 * @param {Object} response
 */
function prepareErrorLoginAction(response) {
  return {
    payload: response,
  };
}

export const setErrorUser = createAction(
  SET_ERROR_USER,
  prepareErrorLoginAction
);

export const getProfile = createAction(SAGA_GET_USER);

/**
 * Response profile users
 * @param {Object} response
 */
function prepareProfileAction(response) {
  return {
    payload: response,
  };
}

export const setProfileUser = createAction(
  SET_PROFILE_USER,
  prepareProfileAction
);

export const signout = createAction(SAGA_SIGN_OUT);
export const setSignOut = createAction(SET_SIGN_OUT);
