import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://netology-trainbooking.netoservices.ru";

export const MyApi = createApi({
    reducerPath: "MyApi",
    endpoints: (builder) => ({
        getCities: builder.query({
            queryFn: async () => {
                try {
                    const response = await fetch("https://netology-trainbooking.netoservices.ru/routes/cities?name=мос");
                    return {data: await response.json() };
                } catch (e) {
                    return { error: e.message };
                }
            },
        })
    }),
});

export const { useGetCitiesQuery } = MyApi;