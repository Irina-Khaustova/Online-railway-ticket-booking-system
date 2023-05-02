import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://netology-trainbooking.netoservices.ru";

export const MyApi = createApi({
    reducerPath: "MyApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://netology-trainbooking.netoservices.ru/' }),
  endpoints: (builder) => ({
    getCities: builder.query ({
      query: (name) => `routes/cities?name=${name}`,
    }),
  }),
});

export const { useGetCitiesQuery, getCities } = MyApi;