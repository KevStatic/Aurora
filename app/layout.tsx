import './globals.css'
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Aurora | Men\'s Essentials',
  description: 'Timeless Essentials. Responsibly Crafted',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AnnouncementBar />
        <Header />
        <main>
          {children} {/* This is where your page content will go */}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}