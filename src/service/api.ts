import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Food, void>({
      query: () => 'restaurantes'
    }),
    getRestaurantes: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetHomeQuery,
  useGetRestaurantQuery,
  useGetRestaurantesQuery,
  usePurchaseMutation
} = api

export default api
