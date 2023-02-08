import { GET_CAMERA_LIST } from "../types";

const initialState = {
  camera: {},
  cameras: [],
};

const camera = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMERA_LIST:
      return {
        ...state,
        cameras: action.payload,
      };
    default:
      return state;
  }
};

export default camera;
