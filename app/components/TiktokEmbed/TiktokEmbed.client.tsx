'use client'

import './styles.scss'

import React from 'react'

interface TiktokEmbedClientProps {
  videoId: string
  username: string
  caption?: string
  showFallback?: boolean
  maxWidth?: number
  minWidth?: number
}

const TiktokEmbedClient = ({
  videoId,
  username,
  caption,
  showFallback = true,
  maxWidth = 605,
  minWidth = 325
}: TiktokEmbedClientProps) => {
  const tiktokUrl = `https://www.tiktok.com/@${username}/video/${videoId}`
  const profileUrl = `https://www.tiktok.com/@${username}?refer=embed`

  return (
    <blockquote
      className="tiktok-embed"
      cite={tiktokUrl}
      data-video-id={videoId}
      style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
    >
      {showFallback && (
        <section className="tiktok-fallback">
          <a target="_blank" rel="noopener noreferrer" title={`@${username}`} href={profileUrl}>
            @{username}
          </a>
          {caption && <p className="tiktok-caption">{caption}</p>}
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="tiktok-link">
            Ver en TikTok
          </a>
        </section>
      )}
    </blockquote>
  )
}

export default TiktokEmbedClient
