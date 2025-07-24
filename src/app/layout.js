import localFont from "next/font/local";
import SessionProviderWrapper from "./SessionProviderWrapper";
import "./globals.scss";
import "./globals.css";
import { getServerSession } from "next-auth";

const myriad = localFont({
  src: "../resources/fonts/Myriad/Myriad Pro-Regular.woff2",
  display: "swap",
});

const futura = localFont({
  src: "../resources/fonts/Futurabold/futuraboldcondensedoriginal.otf",
  display: "swap",
  weight: "700",
  variable: "--font-futura",
});

export const metadata = {
  title: "Pharmek",
  description:
    "Pharmek es una compañía farmacéutica veterinaria, nació en abril del año 2010 constituida con capital 100% peruano, el objetivo era producir productos propios eso era la idea desde un principio, realizamos todas las exigencias de senasa.",
  authors: [
    {
      name: "Tito Camilo Bohorquez Quito",
      url: "https://www.linkedin.com/in/tito-camilo-bohorquez-quito-1497709b/",
    },
    {
      name: "Carlos Alberto Hernandez Vivanco",
      url: "https://www.linkedin.com/in/carlos-hern%C3%A1ndez-180260149/",
    },
  ],
  creator: "Tito Camilo Bohorquez Quito",
  publisher: "Tito Camilo Bohorquez Quito",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="es">
      <body className={`${myriad.variable} ${futura.variable}`}>
        <SessionProviderWrapper session={session}>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
