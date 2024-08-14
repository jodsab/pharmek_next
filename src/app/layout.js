import localFont from "next/font/local";
import "./globals.scss";

const myriad = localFont({
  src: "../resources/fonts/Myriad/Myriad Pro-Regular.woff2",
  display: "swap",
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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={myriad.className}>{children}</body>
    </html>
  );
}
