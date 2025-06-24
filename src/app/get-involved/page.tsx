import Container from "@/app/_components/container";
import Link from "next/link";
import DonateButton from "@/app/_components/donate-button";
import { FOUNDATION_ADDRESS } from "@/lib/constants";

export default function GetInvolved() {
  return (
    <main>
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Volunteer</h2>
              <p className="mb-4">
                There are many ways to get involved with the Hillsdale Community Foundation:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Join the Usual Suspects cleanup crew</li>
                <li>Help with the annual book sale</li>
                <li>Participate in HAT meetings</li>
                <li>Support community events</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Contact Us to Volunteer
              </Link>
            </section>            <section className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Donate</h2>
              <p className="mb-6">
                Your donations help us continue our work in the Hillsdale community. All donations are tax-deductible.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Donate Online:</h3>
                <DonateButton />
              </div>
                <div className="space-y-4">
                <p className="font-semibold">Or send checks to:</p>
                <address className="not-italic whitespace-pre-line">
                  {FOUNDATION_ADDRESS}
                </address>
              </div>
            </section>
          </div>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Current Opportunities</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Book Sale Preparation</h3>
                <p>Help sort and organize books for our upcoming July 2025 sale.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Community Clean-Up</h3>
                <p>Join our first Saturday monthly clean-ups with the Usual Suspects.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">HAT Program</h3>
                <p>Support our neighbors in need through the Hillsdale Assistance Team.</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}