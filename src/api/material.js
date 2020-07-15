import { getApiUrl, appGet } from "../utils/httpFetch";

export async function listMaterials(token, storeId, page) {
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const url = `${getApiUrl()}v1/raw-materials?storeId=${storeId}&page=${page}`;
  const response = await appGet(url, header);
  return response;
}

export async function retreiveMaterial(token, uuid) {
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const url = `${getApiUrl()}v1/raw-materials/${uuid}`;
  const response = await appGet(url, header);
  return response;
}
