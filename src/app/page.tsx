import Container from "@/app/_components/container";
import UpcomingEvents from "@/app/_components/upcoming-events";

export default function Home() {
  return (
    <main>
      <Container>
        <section className="py-20">
          <h1 className="text-5xl font-bold mb-8">
            Building Community in Hillsdale
          </h1>
          <p className="text-xl mb-12">
            The Hillsdale Community Foundation exists to strengthen community among those who live and work in Hillsdale. The Foundation organizes community events; supports our schools and other institutions; beautifies and sustains our environment; and helps neighbors in need.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Annual Book Sale</h2>
              <p>Join us on Sunday, July 20, 2025, from 9:00 AM – 1:00 PM for our annual book sale.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Hillsdale Assistance Team</h2>
              <p>HAT meets the 2nd Tuesday of each month at 7:00 PM via Zoom.</p>
            </div>
          </div>

          <section className="bg-gray-50 p-8 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <a href="/events" className="text-hillsdale-red hover:text-hillsdale-yellow">View Calendar →</a>
            </div>
            <UpcomingEvents />
          </section>
        </section>
      </Container>
    </main>
  );
}
