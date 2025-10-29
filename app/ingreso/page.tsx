import React from 'react'

import { AuthGuard } from '@/core/guards'

import IngresoClient from './page.client'

export default function IngresoPage() {
  return (
    <AuthGuard requireAuth={false} redirectTo="/">
      <IngresoClient />
    </AuthGuard>
  )
}
