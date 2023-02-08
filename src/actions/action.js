import axios from "axios";
import { GET_CAMERA_LIST } from "../redux/types";

export const getCameras = () => (dispatch) => {
  axios.get("/api/cameras").then((res) => {
    dispatch({ type: GET_CAMERA_LIST, payload: res.data });
  });
};
