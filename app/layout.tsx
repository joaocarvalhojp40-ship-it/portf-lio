import './globals.css';
import React from 'react';

export const metadata = {
  title: 'João Paulo | Portfólio',
  description: 'Portfólio de João Paulo - Desenvolvedor & Suporte Técnico'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0D0D0D] text-white antialiased">{children}</body>
    </html>
  );
}
