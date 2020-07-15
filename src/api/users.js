import { getApiUrl, appGet, appPost } from "../utils/httpFetch";

export async function signIn(username, password) {
  const grant_type = "password";
  const client_id = 7;
  const client_secret = "7NDniuscI4542dXzaUiCTN79iIuuMNiQ0wcItmxa";
  const url = `${getApiUrl()}v1/oauth/token`;
  const payload = { grant_type, client_id, client_secret, username, password };
  const response = await appPost(url, payload);
  return response;
}

export async function getProfile(token) {
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const url = `${getApiUrl()}v1/users/me`;
  const response = await appGet(url, header);
  return response;
}
