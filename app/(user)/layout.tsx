import Header from 'app/(user)/Header';
import 'styles/globals.css';

import { Caveat, Nunito } from '@next/font/google';

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
      <body className='max-w-7xl mx-auto font-sans bg-[#f4f4f4]'>
        <Header />
        {children}
      </body>
    </html>
  );
}
