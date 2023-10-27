import {createApi , fetchBaseQuery}  from '@reduxjs/toolkit/query/react'

export const productApi = createApi( {
    reducerPath: 'productApi' ,
    baseQuery: fetchBaseQuery({baseUrl:`https://mernbackend-9h6d.onrender.com/api/product`}) ,
    endpoints : (builder)=> ( {
        getAllProducts : builder.query ( {
            query: ()=> 'get-product'
        })
    })
})

export const {useGetAllProductsQuery} = productApi 