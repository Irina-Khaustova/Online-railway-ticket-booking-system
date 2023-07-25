import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://netology-trainbooking.netoservices.ru";

export const myApi = createApi({
    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/' }),
  endpoints: (builder) => ({
    getCities: builder.query ({
      query: (name) => `routes/cities?name=${name}`,
    }),
    getTrain: builder.query 
    ({
      query: (id) => `routes?${id}`,
    }),
  }),
});


export const { useGetCitiesQuery, useGetTrainQuery } = myApi;