import Header from 'app/(user)/Header';
import 'styles/globals.css';

import { Caveat, Nunito } from '@next/font/google';
import Footer from './Footer';

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
});

const sono = Nunito({
  variable: '--font-sono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${caveat.variable} ${sono.variable}`}>
      <body className=' font-sans bg-[#f4f4f4] text-gray-800'>
        <div className='max-w-7xl mx-auto'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
