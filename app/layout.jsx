import { Inter } from 'next/font/google';
import cls from 'classname';

import './globals.css';
import Footer from './Container/footer';
import NavBar from './Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IVR | Power Works',
  description:
    'Ivr power works, a fast growing system of electrical engineering services. ',
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
