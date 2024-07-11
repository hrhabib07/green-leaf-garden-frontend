/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
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
    }),
    createProduct: builder.mutation({
      query: ({ ...product }) => ({
        url: `products/create-product`,
        method: "POST",
        body: product,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useUpdateProductMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
}: any = baseApi;
