import './globals.scss'
import './globals.css'
import 'aos/dist/aos.css'
import './styles.scss'

import WithNavbarAndFooter from '@components/WithNavbarAndFooter'
import localFont from 'next/font/local'

import { AuthProvider } from '@/context/AuthContext'

import { Providers } from './providers'

// Fuente Myriad
const myriad = localFont({
  src: '../src/assets/fonts/Myriad/MyriadPro.woff2',
  display: 'swap',
  variable: '--font-myriad' // 👈 agrega variable si quieres usarla en className
})

// Fuente Futura
const futura = localFont({
  src: '../src/assets/fonts/Futurabold/futuraboldcondensedoriginal.otf',
  display: 'swap',
  variable: '--font-futura',
  weight: '700'
})

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="es">
      {/* Usamos las variables definidas */}
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
