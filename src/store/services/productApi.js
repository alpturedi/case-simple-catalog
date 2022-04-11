import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CATALOG_API } from '../../constants';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: CATALOG_API }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getCategoryById: builder.query({ query: (cid) => `categories/${cid}` }),
    getProductsOfCategory: builder.query({
      query: (cid) => {
        if (cid === -1) {
          return `favorites`;
        }
        return `categories/${cid}/products`;
      },
    }),
    getAllCategories: builder.query({
      query: () => `categories`,
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
  useGetProductsOfCategoryQuery,
  useGetAllCategoriesQuery,
  useGetFavoritesQuery,
} = productApi;
