import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../configureAxios';

const initialState = {
  contents: [],
};

export const counterSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setContents: (state, action) => {
      state.contents = action.payload;
    },
  },
});

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const response = await api.get('/categories');
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const { setContents } = counterSlice.actions;

export default counterSlice.reducer;
