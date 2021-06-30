import { API_URL } from "./../config/constant.js";

export default class NguoiDungServices {
  callApi(uri, method, data) {
    return axios({
      url: API_URL + uri,
      method,
      data,
    });
  }
}
