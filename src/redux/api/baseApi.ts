/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://grean-leaf-garden-backend.vercel.app/api/v1",
  }),
  tagTypes: ["product", "category"],
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
    createOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: `orders/create-order`,
        method: "POST",
        body: order,
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

    getAllCategories: builder.query({
      query: () => "categories",
      providesTags: ["category"],
    }),
    createCategory: builder.mutation({
      query: ({ ...category }) => ({
        url: `categories/create-category`,
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...category }) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
  useGetProductByIDQuery,
  useUpdateProductMutation,
  useCreateOrderMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
}: any = baseApi;
