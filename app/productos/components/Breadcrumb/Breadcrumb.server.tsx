import React from 'react'

import BreadcrumbClient from './Breadcrumb.client'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  showHomeIcon?: boolean
  maxLabelLength?: number
}

const Breadcrumb = ({
  items,
  separator,
  showHomeIcon = false,
  maxLabelLength = 30
}: BreadcrumbProps) => {
  return (
    <BreadcrumbClient
      items={items}
      separator={separator}
      showHomeIcon={showHomeIcon}
      maxLabelLength={maxLabelLength}
    />
  )
}

export default Breadcrumb
