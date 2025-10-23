'use client'

import './styles.scss'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

interface BreadcrumbClientProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  showHomeIcon?: boolean
  maxLabelLength?: number
}

const BreadcrumbClient = ({
  items,
  separator = <ChevronRight size={16} />,
  showHomeIcon = false,
  maxLabelLength = 30
}: BreadcrumbClientProps) => {
  if (!items || items.length === 0) {
    return null
  }

  const truncateLabel = (label: string) => {
    if (label.length <= maxLabelLength) return label
    return `${label.slice(0, maxLabelLength)}...`
  }

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1
          const isFirstItem = index === 0

          return (
            <li
              key={`${item.label}-${index}`}
              className={`breadcrumb-item ${isLastItem ? 'active' : ''}`}
            >
              {!isLastItem && item.href ? (
                <Link href={item.href} className="breadcrumb-link">
                  {showHomeIcon && isFirstItem && item.label === 'Home' ? (
                    <Home size={16} />
                  ) : (
                    truncateLabel(item.label)
                  )}
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                </Link>
              ) : (
                <span className="breadcrumb-current">{truncateLabel(item.label)}</span>
              )}

              {!isLastItem && <span className="breadcrumb-separator">{separator}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default BreadcrumbClient
