import { createSlice } from "@reduxjs/toolkit";

export const materialsReducer = createSlice({
  name: "materials",
  initialState: {
    loading: true,
    data: [],
    raw: [],
    page: 0,
    lastPage: 1,
  },
  reducers: {
    setList(state, action) {
      state.data = [...state.data, ...action.payload.data];
      state.page = action.payload.meta.current_page;
      state.lastPage = action.payload.meta.last_page;
    },
    setResetList(state, action) {
      state.data = [...action.payload.data];
      state.page = action.payload.meta.current_page;
      state.lastPage = action.payload.meta.last_page;
    },
    setLoading(state, action) {
      state.loading = action.payload.loading;
    },
    setSearchList(state, action) {
      state.data = action.payload.data;
    },
    setTick(state, action) {
      state.data.map((item) => {
        if (item.uuid === action.payload.uuid) {
          item.selected = action.payload.selected;
        }
      });
    },
    setRaw(state, action) {
      state.raw = action.payload.data;
    },
  },
});

export const { setList, setRaw } = materialsReducer.actions;

export default materialsReducer.reducer;
