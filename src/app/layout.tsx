import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suppin',
  description:
    'Suppin은 supporter for influencer라는 뜻으로 인플루언서의 이벤트 생성부터 당첨자 선정 및 관리까지의 업무를 보조하는 인플루언서 마케팅 도우미 서비스입니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
