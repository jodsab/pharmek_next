// app/registro/page.tsx (SIN 'use client')
import React from 'react'

import { AuthGuard } from '@/core/guards'

import RegistroClient from './page.client'

export default function RegistroPage(): React.JSX.Element {
  return (
    <AuthGuard requireAuth={false} redirectTo="/">
      <RegistroClient />
    </AuthGuard>
  )
}
