import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help Me Publish - Outil de publication pour les réseaux sociaux",
  description: "Créez et prévisualisez vos publications pour Facebook, Instagram et LinkedIn en un seul endroit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
