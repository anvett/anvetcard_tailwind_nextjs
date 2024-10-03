


import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Metadata configurada sin viewport
export const metadata = {
  title: "Andrés Veintimilla - Ingeniero Informático",
  description: "Ingeniero Informático, máster en TI y presidente de Anvetcorp SAS",
  keywords: "Andrés Veintimilla, Ingeniero Informático, soporte técnico, Anvetcorp, desarrollo web",
  authors: [{ name: "Andrés Veintimilla" }],
  robots: "index, follow",
  openGraph: {
    title: "Andrés Veintimilla - Ingeniero Informático",
    description: "Ingeniero Informático, máster en TI y presidente de Anvetcorp SAS",
    url: "https://www.anvetcorp.com/",
    images: [
      {
        url: "/assets/images/sharedimage.jpeg",
        alt: "Anvetcorp Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Veintimilla - Ingeniero Informático",
    description: "Ingeniero Informático, máster en TI y presidente de Anvetcorp SAS",
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: "/public/assets/icons/favicon.ico",
  },
};

// Nueva exportación para viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-image-with-overlay">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
