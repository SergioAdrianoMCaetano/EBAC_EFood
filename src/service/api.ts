import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../pages/Home'
import { buildQueries } from '@testing-library/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Food, void>({
      query: () => 'efood'
    }),
    getRestaurantes: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Food[], string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetHomeQuery,
  useGetRestaurantQuery,
  useGetRestaurantesQuery
} = api

export default api
