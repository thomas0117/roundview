import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ROUNDVIEW · 環境行動觀測站',
  description: '整理氣候變遷、能源轉型與環境保育資訊的觀測站網站。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="site-wrapper">
          <Header />

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <p>© {new Date().getFullYear()} ROUNDVIEW · 環境行動觀測站</p>
            <p className="footer-sub">Demo 版介面 | 即將整合 Supabase</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
