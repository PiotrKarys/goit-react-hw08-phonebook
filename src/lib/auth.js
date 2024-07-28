import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const clearAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
};
