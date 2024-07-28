import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    clearContacts(state) {
      state.items = [];
      state.filter = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const { setFilter, clearContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
