import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthToken, clearAuthToken } from "../../lib/auth.js";
import { clearContacts } from "../contacts/slice";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setAuthToken(data.token);
      return { user: data.user, token: data.token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthToken();
    thunkAPI.dispatch(clearContacts());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthToken(persistedToken);
      const { data } = await axios.get("/users/current");
      console.log("uztkownik?", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
