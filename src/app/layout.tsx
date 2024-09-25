import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recruitment App',
  description: 'Recruitment App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-100 h-full`}>
        
        <div
          className="
            min-h-screen flex flex-col gap-0     
            sm:gap-2   sm:flex sm:flex-column    
            md:gap-6      
            lg:gap-12    
            bg-white            
            // border border-gray-200  
          "

        >

          <Navbar />
          {children}
          
        </div>

        {/* <div className='bg-red-300 min-h-40 w-full'>Footer</div> */}
        <Footer/>

      </body>
    </html>
  );}
