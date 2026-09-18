import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Çınar Nakliyat — Ağır Yükte 1980'den Beri",
  description:
    "Karabük merkezli Çınar Nakliyat, 1980'den beri demir-çelik, hurda, mermer ve ağır yük taşımacılığında hizmet verir. Sevkiyat ve fiyat hattı: +90 532 352 6514.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
