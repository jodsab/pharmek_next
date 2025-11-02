export type SocialLink = { url: string; label?: string }

const SOCIAL_NETWORKS = {
  whatsapp: {
    url: 'https://api.whatsapp.com/send?phone=51974587086'
  },
  instagram: {
    url: 'https://www.instagram.com/pharmek_oficial_/'
  },
  facebook: {
    url: 'https://www.facebook.com/profile.php?id=100057615062756'
  },
  tiktok: {
    url: 'https://www.tiktok.com/@pharmek_oficial'
  }
}

export { SOCIAL_NETWORKS }
