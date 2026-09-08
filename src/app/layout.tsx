import { ReactNode } from 'react';
import './ui/global.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const adventor = localFont({
  src: [
    { path: './fonts/tex-gyre-adventor.regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/tex-gyre-adventor.italic.otf', weight: '400', style: 'italic' },
    { path: './fonts/tex-gyre-adventor.bold.otf', weight: '700', style: 'normal' },
    { path: './fonts/tex-gyre-adventor.bold-italic.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-adventor',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${adventor.variable} h-dvh flex flex-col`}> 
        <Navbar/>
        {children}
        {/*<Footer/>*/}
      </body>
    </html>
  );
}