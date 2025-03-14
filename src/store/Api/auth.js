import { Logout } from '@/lib/svg_icons';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),

    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (body) => ({
                url: "user/signin",
                method: "POST",
                credentials: "include",
                body,
            })
        }),
        hasSubscription: builder.query({
            query: (userId) => `order/has-subscription/${userId}`
        }),
        verifyUser: builder.mutation({
            query: (body) => ({
                url: "user/verify-user",
                method: "POST",
                credentials: "include",
                body,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "user/logout",
                method: "DELETE",
                credentials: "include",
            })
        }),
        switchDevice: builder.mutation({
            query: () => ({
                url: "user/switch-device",
                method: "POST",
            })
        }),
        getUserDetail: builder.query({
            query: () => "user/send-me"
        }),

    })
})


export const { useSigninMutation,
    useVerifyUserMutation,
    useLogoutMutation,
    useSwitchDeviceMutation,
    useLazyHasSubscriptionQuery,
    useGetUserDetailQuery,
    useHasSubscriptionQuery } = authApi;