import Container from "@/app/_components/container";
import UpcomingEvents from "@/app/_components/upcoming-events";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/community-background.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-white bg-opacity-80" />
      
      {/* Content */}
      <div className="relative z-10">
        <Container>
        <section className="py-20">
          <div className="text-center mb-12">
            <Image 
              src="/assets/hcf-logo.png" 
              alt="Hillsdale Community Foundation Logo"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold mb-8">
              Building Community in Hillsdale
            </h1>
            <p className="text-xl mb-12 max-w-4xl mx-auto">
              The Hillsdale Community Foundation exists to strengthen community among those who live and work in Hillsdale. The Foundation organizes community events; supports our schools and other institutions; beautifies and sustains our environment; and helps neighbors in need.
            </p>
          </div>          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Annual Book Sale</h2>
              <p>Join us on Sunday, July 20, from 9:00 AM – 1:00 PM for our annual book sale at The Watershed.</p>
              <p className="mt-2 text-sm text-gray-600">6388 SW Capitol Hwy, Portland, OR 97239</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Hillsdale Assistance Team</h2>
              <p>HAT meets the 2nd Tuesday of each month at 7:00 PM via Zoom.</p>
            </div>
          </div>

          <section className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <a href="/events" className="text-hillsdale-red hover:text-hillsdale-yellow">View Calendar →</a>
            </div>
            <UpcomingEvents />          </section>
        </section>
      </Container>
      </div>
    </main>
  );
}
