/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["product"],
    }),
    getSearchedProducts: builder.query({
      query: (searchTerm) => `products?${searchTerm}`,
    }),

    getProductByID: builder.query({
      query: (id) => `products/${id}`,
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: ({ ...product }) => ({
        url: `products/create-product`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
  useGetProductByIDQuery,
  useUpdateProductMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
}: any = baseApi;
