import Link from 'next/link';
import Container from './container';
import DonateButton from './donate-button';

const Navigation = () => {
  return (
    <nav className="bg-hillsdale-blue text-white shadow-lg">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl">
            Hillsdale Community Foundation
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="hover:text-hillsdale-yellow">About</Link>
            <Link href="/programs" className="hover:text-hillsdale-yellow">Programs</Link>
            <Link href="/events" className="hover:text-hillsdale-yellow">Events</Link>
            <Link href="/get-involved" className="hover:text-hillsdale-yellow">Get Involved</Link>
            <Link href="/resources" className="hover:text-hillsdale-yellow">Resources</Link>
            <DonateButton />
          </div>          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <DonateButton />
            </div>
            <button className="md:hidden">
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

