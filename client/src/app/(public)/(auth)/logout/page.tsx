'use client'

import { useLogoutMutation } from '@/queries/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function LogoutPage() {
  const { mutateAsync } = useLogoutMutation()
  const router = useRouter()
  const isLoggingOut = useRef(null)
  // tạo một biến để giữ trạng thái đăng xuất, tránh việc gọi nhiều lần

  useEffect(() => {
    if (isLoggingOut.current) return
    mutateAsync().then(() => {
      router.push('/login')
      setTimeout(() => {
        isLoggingOut.current = null
      }, 2000)
      // đặt lại biến sau 1 giây logout
    })
  }, [mutateAsync, router])

  return <div>Logging out...</div>
}
