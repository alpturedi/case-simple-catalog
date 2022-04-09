import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../configureAxios';

const initialState = {
  contents: [],
  categoryId: -1,
  status: 'initial',
  error: null,
  seletectedProduct: false,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchCategory',
  async (cid) => {
    let query = '';
    if (cid === -1) {
      query = '/favorites';
    } else {
      query = '/categories/' + cid.toString() + '/products';
    }
    const response = await api.get(query);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const setCategory = createAsyncThunk(
//   'products/setCategory'
//   // async (cid) => {
//   //   let query = '';
//   //   if (cid === -1) {
//   //     query = '/favorites';
//   //   } else {
//   //     query = '/categories/' + cid.toString() + '/products';
//   //   }
//   //   const response = await api.get(query);

//   //   // The value we return becomes the `fulfilled` action payload
//   //   return response.data;
//   // }
// );

export const fetchProduct = createAsyncThunk(
  'products/fetchId',
  async (pid) => {
    const response = await api.get('/products/' + pid.toString());

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        console.log('LOADING');
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log('PAYLOAD', action.payload);
        state.contents = [...action.payload];
      })
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
        console.log('LOADING');
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log('PAYLOAD', action.payload);
        state.seletectedProduct = action.payload;
      });
  },
});

export const { setCategoryId } = productsSlice.actions;

export const selectProducts = (state) => state.products.contents;

export const selectProduct = (state) => state.products.seletectedProduct;

export const selectProductById = (state, id) =>
  state.products.contents.filter((e) => e.id === id).at(0);

export default productsSlice.reducer;
