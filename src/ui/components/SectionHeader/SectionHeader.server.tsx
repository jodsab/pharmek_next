import { StaticImageData } from 'next/image'
import React from 'react'

import SectionHeaderClient from './SectionHeader.client'

interface SectionHeaderProps {
  title: string
  subtitle: string
  src: string | StaticImageData
  imageSize?: number
}

const SectionHeader = ({
  title,
  subtitle,
  src,
  imageSize = 100
}: SectionHeaderProps): React.JSX.Element => {
  return <SectionHeaderClient title={title} subtitle={subtitle} src={src} imageSize={imageSize} />
}

export default SectionHeader
