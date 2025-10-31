// app/registro/page.tsx (SIN 'use client')
import React from 'react'

import { AuthGuard } from '@/core/guards'

import RegistroClient from './page.client'

export default function RegistroPage() {
  return (
    <AuthGuard requireAuth={false} redirectTo="/">
      <RegistroClient />
    </AuthGuard>
  )
}
