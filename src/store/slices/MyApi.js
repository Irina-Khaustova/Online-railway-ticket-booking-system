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
    getWagon: builder.query 
    ({
      query: (id) => `routes/${id}/seats`,
    }),
    putOrder: builder.mutation
    ({
      query(data) {
        const {id, ...body} = data
        return {
          url: `/order/${id}`,
          method: 'POST',
          body
        }
      }
    }),
  }),
});


export const { useGetCitiesQuery, useGetTrainQuery, useGetWagonQuery, usePutOrderMutation } = myApi;