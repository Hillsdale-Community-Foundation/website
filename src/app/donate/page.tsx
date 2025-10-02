import Container from "@/app/_components/container";
import DonateButton from "@/app/_components/donate-button";
import { FOUNDATION_ADDRESS } from "@/lib/constants";

export default function Donate() {
  return (
    <main>
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-8">Donate</h1>
          
          <section className="bg-green-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Support Our Community</h2>
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
      </Container>
    </main>
  );
}
