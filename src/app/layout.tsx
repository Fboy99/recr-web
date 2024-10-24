import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import ApolloProvider from "@/apollo/ApolloProvider";
import { LanguageProvider } from './contexts/LanguageContext';


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
      <ApolloProvider>
     
        <div
          className="
            min-h-screen flex flex-col gap-0     
            sm:gap-2   sm:flex sm:flex-column    
            md:gap-6      
            lg:gap-12    
            bg-white            
          "

        >
        <LanguageProvider>
        <Navbar />
          {children}
        </LanguageProvider>
        </div>

        <Footer/>
        </ApolloProvider>

      </body>
    </html>
  );}

