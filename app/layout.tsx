import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Çınar Nakliyat — Ağır Yükte 1980'den Beri",
  description:
    "Demir-çelik, hurda, mermer ve şehirler arası ağır yük taşımacılığında 1980'den beri sahadayız. Sevkiyat ve fiyat hattı: 0546 969 0233.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
