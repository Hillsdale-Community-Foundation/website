import Container from "@/app/_components/container";

export default function Resources() {
  return (
    <main className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/easter-egg-hunt.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-white bg-opacity-92" />
      
      {/* Content */}
      <div className="relative z-10">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-8">Community Partners</h1>

          <div className="space-y-8">
            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Hillsdale Assistance Team (HAT)</h2>
              <p className="text-lg mb-6">
                HAT provides support to neighbors in need through community outreach and assistance programs.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">How HAT Helps:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Emergency assistance for community members</li>
                  <li>Connecting neighbors with available resources</li>
                  <li>Community outreach and support programs</li>
                  <li>Monthly meetings to coordinate assistance efforts</li>
                </ul>
              </div>
            </section>
            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Hillsdale News</h2>
              <p className="text-lg mb-6">
                Stay informed about local events, initiatives, and community updates through our various news channels:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Monthly Newsletter</h3>
                  <p>Subscribe to our email newsletter for regular updates about:</p>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>Community events</li>
                    <li>Program announcements</li>
                    <li>Volunteer opportunities</li>
                    <li>Local news</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Community Bulletin</h3>
                  <p>Check our physical bulletin boards located at:</p>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>Hillsdale Library</li>
                    <li>Food Front Co-op</li>
                    <li>Basics Market</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Partnership Opportunities</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg mb-4">
                  Interested in partnering with the Hillsdale Community Foundation?
                </p>
                <p className="mb-4">
                  We&apos;re always looking to collaborate with local businesses, organizations, 
                  and community members who share our vision of strengthening Hillsdale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/get-involved"
                    className="bg-hillsdale-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Get Involved
                  </a>
                  <a
                    href="/about"
                    className="border border-hillsdale-blue text-hillsdale-blue px-6 py-3 rounded-lg font-medium hover:bg-hillsdale-blue hover:text-white transition-colors text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
      </div>
    </main>
  );
}