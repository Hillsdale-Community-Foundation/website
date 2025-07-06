import Container from "@/app/_components/container";

export default function Programs() {
  return (
    <main className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/easter-egg-hunt.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-white bg-opacity-90" />
      
      {/* Content */}
      <div className="relative z-10">
        <Container><div className="py-16">
          <h1 className="text-4xl font-bold mb-8">Our Programs</h1>
            <div className="space-y-8">
            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Annual Book Sale</h2>
              <p className="text-lg mb-4">
                Our annual book sale is a cherished community event that brings together readers 
                and supports local initiatives.
              </p>
              <div className="bg-blue-50 p-4 rounded mb-6">
                <p className="font-semibold text-lg mb-2">Book Sale Event:</p>
                <p className="font-semibold">Sunday, July 20, 9:00 AM - 1:00 PM</p>
                <p>@ The Watershed</p>
                <p>6388 SW Capitol Hwy, Portland, OR 97239</p>
                <p className="mt-2">
                  <a 
                    href="https://maps.app.goo.gl/Mw8MhJgH8MZdLqmg7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-lg mb-4">Donate Your Books:</p>
                
                <div className="mb-4">
                  <p className="font-medium">@ The Watershed, Bertha Ct. Pull-in</p>
                  <p>6388 SW Capitol Hwy, Portland, OR 97239</p>
                  <p className="mb-2">
                    <a 
                      href="https://maps.app.goo.gl/Mw8MhJgH8MZdLqmg7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Mon: July 7th &amp; 14th from 9:00 AM to 12 PM</li>
                    <li>Wed: July 9th &amp; 16th from 9:00 AM to 12 PM</li>
                    <li>Wed: July 16th from 4:00 PM to 6:00 PM</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">@ Hillsdale Farmers&apos; Market</p>
                  <p>1405 SW Vermont St, Portland, OR 97219</p>
                  <p className="mb-2">
                    <a 
                      href="https://maps.app.goo.gl/QfZn2Ukzc48PsXY39" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Sun: July 6th &amp; 13th</li>
                  </ul>
                </div>
              </div>
            </section>            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Hillsdale Assistance Team (HAT)</h2>
              <p className="text-lg mb-4">
                HAT provides support to neighbors in need through community outreach and assistance programs.
              </p>
              <div className="bg-green-50 p-4 rounded">
                <p>Monthly Meetings: 2nd Tuesday at 7:00 PM</p>
                <p>Join via Zoom:</p>
                <p>Meeting ID: 895 8793 7438</p>
                <p>Passcode: 457499</p>
              </div>
            </section>            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">The Usual Suspects</h2>
              <p className="text-lg mb-4">
                Join our monthly community cleanup initiative to help keep Hillsdale beautiful.
              </p>
              <p className="mb-4">
                The Garden Variety Suspects are currently on hiatus, so First Saturday clean-ups are held solely by the Usual Suspects crew.
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <p>When: First Saturday of each month</p>
                <p>Meet: Outside Basics Market</p>
                <p>Bring: Gloves and weather-appropriate clothing</p>
              </div>
            </section>
          </div>        </div>
      </Container>
      </div>
    </main>
  );
}