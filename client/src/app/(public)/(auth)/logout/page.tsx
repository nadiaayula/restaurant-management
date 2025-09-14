'use client'

import { getRefreshTokenFromLocalStorage } from '@/lib/utils'
import { useLogoutMutation } from '@/queries/useAuth'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function LogoutPage() {
  const { mutateAsync } = useLogoutMutation()
  const router = useRouter()
  const searchParams = useSearchParams()
  const refreshTokenFromURL = searchParams.get('refreshToken')
  // lấy refreshToken từ query param
  const isLoggingOut = useRef(null)
  // tạo một biến để giữ trạng thái đăng xuất, tránh việc gọi nhiều lần

  useEffect(() => {
    if (isLoggingOut.current || refreshTokenFromURL !== getRefreshTokenFromLocalStorage()) return
    mutateAsync().then(() => {
      router.push('/login')
      setTimeout(() => {
        isLoggingOut.current = null
      }, 2000)
      // đặt lại biến sau 2 giây logout
    })
  }, [mutateAsync, router, refreshTokenFromURL])

  return <div>Logging out...</div>
}
