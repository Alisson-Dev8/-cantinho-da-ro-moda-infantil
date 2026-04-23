import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cantinho da Ro - Moda Infantil",
  description: "Roupinhas fofas, divertidas e cheias de cor para os pequenos brincarem, sonharem e crescerem felizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
