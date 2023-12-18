import { Inter } from 'next/font/google';
import cls from 'classname';
import Link from 'next/link';

import './globals.css';
import Footer from './Container/footer';
import NavBar from './Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cls(inter.className, 'bg-white')}>
        <NavBar />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
