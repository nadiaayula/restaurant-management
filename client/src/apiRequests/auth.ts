import http from '@/lib/http'
import {
  LoginBodyType,
  LoginResType,
  LogoutBodyType,
  RefreshTokenBodyType,
  RefreshTokenResType,
} from '@/schemas/auth.schema'

const authApiRequests = {
  sLogin: (body: LoginBodyType) => http.post<LoginResType>('/auth/login', body), // server backend của dự án
  login: (body: LoginBodyType) =>
    http.post<LoginResType>('/api/auth/login', body, {
      baseUrl: '',
    }),
  // gọi tới route handler
  sLogout: (body: LogoutBodyType & { accessToken: string }) =>
    http.post(
      '/auth/logout',
      {
        refreshToken: body.refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${body.accessToken}`,
        },
      },
    ),
  logout: () =>
    http.post('/api/auth/logout', null, {
      baseUrl: '',
    }),
  sRefreshToken: (body: RefreshTokenBodyType) => http.post<RefreshTokenResType>('/auth/refresh-token', body),
  refreshToken: () => http.post<RefreshTokenResType>('/api/auth/refresh-token', null, { baseUrl: '' }),
}

export default authApiRequests
