import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './container';
import DonateButton from './donate-button';

const Navigation = () => {  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <Container>        <div className="flex justify-between items-center py-4"><Link href="/" className="flex items-center">
            <Image 
              src="/assets/hcf-logo.png" 
              alt="Hillsdale Community Foundation"
              width={80}
              height={80}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="text-gray-700 hover:text-hillsdale-blue font-medium transition-colors">About</Link>
            <Link href="/programs" className="text-gray-700 hover:text-hillsdale-blue font-medium transition-colors">Programs</Link>
            <Link href="/resources" className="text-gray-700 hover:text-hillsdale-blue font-medium transition-colors">Partners</Link>
            <Link href="/events" className="text-gray-700 hover:text-hillsdale-blue font-medium transition-colors">Events</Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-hillsdale-blue font-medium transition-colors">Get Involved</Link>
            <DonateButton />
          </div><div className="flex items-center space-x-4">
            <div className="md:hidden">
              <DonateButton />
            </div>            <button className="md:hidden text-gray-700 hover:text-hillsdale-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;

