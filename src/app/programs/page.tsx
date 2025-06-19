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
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold">Next Sale: Sunday, July 20, 2025</p>
                <p>Time: 9:00 AM – 1:00 PM</p>
                <p>Location: Hillsdale Library Parking Lot</p>
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