import './globals.scss'
import './globals.css'

import WithNavbarAndFooter from '@components/WithNavbarAndFooter'
import localFont from 'next/font/local'

import { AuthProvider } from '@/context/AuthContext'

import { Providers } from './providers'

const myriad = localFont({
  src: '../src/assets/fonts/Myriad/MyriadPro.woff2',
  display: 'swap'
})

const futura = localFont({
  src: '../src/assets/fonts/Futurabold/futuraboldcondensedoriginal.otf',
  display: 'swap',
  weight: '700',
  variable: '--font-futura'
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${myriad.variable} ${futura.variable}`}>
        <Providers>
          <AuthProvider>
            <WithNavbarAndFooter>{children}</WithNavbarAndFooter>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
