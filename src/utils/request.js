import { ToastAndroid } from "react-native";
import Axios from "axios";
import { CurrentService } from "./current_service";
Axios.defaults.baseURL = "http://10.138.135.252:5000";

export class Request {
  static async requestAsync({ method, path, data, params }) {
    try {
      const token = await CurrentService.getTokenAsync();
      const response = await Axios.request({
        headers: token ? { token } : {},
        method,
        url: path,
        data,
        params,
      });
      return response.data;
    } catch (err) {
      ToastAndroid.show(this.getMessage(err), ToastAndroid.BOTTOM);
    }
  }

  static getMessage(err) {
    if (err?.response?.status == 417)
      return "Make sure you have entered the data correctly.";
    else if (err?.response?.status >= 400 && err?.response?.status < 500)
      return err.response.data;
    else return "There was a server error, please try again later";
  }
}
