import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex space-x-6">
          <Link href="/"><a>Home</a></Link>
          <Link href="/news"><a>News</a></Link>
          <Link href="/about"><a>About Us</a></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
