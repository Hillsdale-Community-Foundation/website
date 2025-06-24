import Container from "@/app/_components/container";
import { FOUNDATION_ADDRESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-hillsdale-blue text-white">
      <Container>
        <div className="py-12 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-6 whitespace-pre-line text-center">{FOUNDATION_ADDRESS}</p>
          <div className="flex space-x-4">
            <a href="/get-involved" className="text-white hover:text-hillsdale-yellow">Get Involved</a>
            <a href="/donate" className="text-white hover:text-hillsdale-yellow">Donate</a>
            <a href="/contact" className="text-white hover:text-hillsdale-yellow">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
