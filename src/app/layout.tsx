// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';

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
        {/* Ensure the viewport meta tag is present */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-100 h-full`}>
        {/* Responsive layout */}

        {/* <div
          className="
            min-h-screen flex flex-col gap-0
            sm: sm:bg-red-500 sm:border-4 border-red-700    
            md: md:bg-green-500 md:border-4 border-green-700    
            lg: lg:bg-blue-500 lg:border-4 border-blue-700   
            sm:gap-2 sm:px-4   sm:flex sm:flex-column    
            md:gap-6 md:px-8      
            lg:gap-12 lg:px-12    
            bg-gray-100            
            border border-gray-200  
          "
        > */}
        
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

          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  );}
