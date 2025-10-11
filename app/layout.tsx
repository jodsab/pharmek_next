import localFont from "next/font/local";
import { AuthProvider } from "@/context/AuthContext";
import { metadata } from './metadata';
import WithNavbarAndFooter from "@components/WithNavbarAndFooter";
import "./globals.scss";
import "./globals.css";

const myriad = localFont({
  src: "../src/assets/fonts/Myriad/MyriadPro.woff2",
  display: "swap",
});

const futura = localFont({
  src: "../src/assets/fonts/Futurabold/futuraboldcondensedoriginal.otf",
  display: "swap",
  weight: "700",
  variable: "--font-futura",
});



export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${myriad.variable} ${futura.variable}`}>
        <AuthProvider><WithNavbarAndFooter>{children}</WithNavbarAndFooter></AuthProvider>
      </body>
    </html>
  );
}
