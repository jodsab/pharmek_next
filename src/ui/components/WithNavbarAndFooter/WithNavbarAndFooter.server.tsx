import React from 'react'

import WithNavbarAndFooterClient from './WithNavbarAndFooter.client'

type Props = {
  children: React.ReactNode
}

export default function WithNavbarAndFooterServer({ children }: Props): React.JSX.Element {
  return <WithNavbarAndFooterClient>{children}</WithNavbarAndFooterClient>
}
