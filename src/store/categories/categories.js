import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../configureAxios';

const initialState = {
  contents: [],
  status: 'initial',
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const response = await api.get('/categories');
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        console.log('LOADING');
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log('PAYLOAD', action.payload);
        state.contents = action.payload;
      });
  },
});

// export const selectCategoryNames = (state) =>
//   state.categories.contents.map((e) => e.name);

export const selectCategories = (state) => state.categories.contents;

export const selectCategoryById = (state, id) => {
  for (let i = 0; i < state.categories.contents.length; i++) {
    if (state.categories.contents[i].id === id) {
      return state.categories.contents[i];
    }
  }
  return {
    id: -1,
    name: 'Favorites',
    description: '',
  };
};

export default categoriesSlice.reducer;
