import React from 'react'

import TiktokEmbedClient from './TiktokEmbed.client'

interface TiktokEmbedProps {
  videoId: string
  username?: string
  caption?: string
  showFallback?: boolean
  maxWidth?: number
  minWidth?: number
}

const TiktokEmbed = ({
  videoId,
  username = '',
  caption,
  showFallback = true,
  maxWidth = 605,
  minWidth = 325
}: TiktokEmbedProps): React.JSX.Element => {
  return (
    <TiktokEmbedClient
      videoId={videoId}
      username={username}
      caption={caption}
      showFallback={showFallback}
      maxWidth={maxWidth}
      minWidth={minWidth}
    />
  )
}

export default TiktokEmbed
