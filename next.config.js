/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: "export", */
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**' // cualquier ruta
      },
      {
        protocol: 'https',
        hostname: '**.pharmek.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        port: ''
      },
      {
        protocol: 'http', // O 'https', dependiendo de la URL exacta
        hostname: 'googleusercontent.com',
        port: '', // Deja vacío si no hay un puerto específico
        pathname: '/image_generation_content/**' // Permite cualquier path bajo este segmento
      },
      {
        protocol: 'https',
        hostname: 'npwwhutijtrixfifcstl.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  }
}

module.exports = nextConfig
