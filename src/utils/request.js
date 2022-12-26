import { ToastAndroid } from "react-native";
import Axios from "axios";
import { CurrentService } from "./current_service";
Axios.defaults.baseURL = "http://192.168.1.131:5000";

export class Request {
  static async requestAsync({ method, path, data }) {
    try {
      const token = await CurrentService.getTokenAsync();
      const response = await Axios.request({
        headers: token ? { token } : {},
        method,
        url: path,
        data,
      });
      return response.data;
    } catch (err) {
      ToastAndroid.show(this.getMessage(err), ToastAndroid.BOTTOM);
    }
  }

  static getMessage(err) {
    if (err.response.status == 417)
      return "Make sure you have entered the data correctly.";
    else if (err.response.status == 500)
      return "There was a server error, please try again later";
    else return err.response.data;
  }
}
