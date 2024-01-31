import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { WHATSAPP } from "@/core/whatsapp";
import Footer from "@/components/Footer";
import "./globals.scss";
import "./wsp.scss";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />

        <Link href={WHATSAPP} className="btn-wsp" target="_blank">
          <FaWhatsapp color="white" size={35} />
        </Link>
      </body>
    </html>
  );
}
