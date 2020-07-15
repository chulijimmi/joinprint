import App from "../../app.json";
import Constants from "expo-constants";

/**
 * Get api url based on release channel
 * @param {String} releaseChannel
 */
export function getApiUrl() {
  const releaseChannel = Constants.manifest.releaseChannel;
  if (releaseChannel === undefined)
    return "https://dev3-api.development.tastelabgroup.com/api/";
  if (releaseChannel.indexOf("prod") !== -1)
    return "https://dev3-api.development.tastelabgroup.com/api/";
  if (releaseChannel.indexOf("staging") !== -1)
    return "https://dev3-api.development.tastelabgroup.com/api/";
}

/**
 * Http Fetch Request POST Method
 * @param {String} url
 * @param {Object} payload
 * @param {Object} header
 */
export const appPost = async (url, payload, header = {}) => {
  const param = { url, payload, header };
  console.log("appPost", param);
  let response = await fetch(url, {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      ...header,
      "content-type": "application/json",
    },
  });
  return await response.json();
};

/**
 * Http Fetch Request GET Method
 * @param {String} url
 * @param {Object} header
 */
export const appGet = async (url, header = {}) => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      ...header,
      "content-type": "application/json",
    },
  });
  return await response.json();
};
