import Container from "@/app/_components/container";

export default function About() {
  return (
    <main>
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-8">About the Foundation</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p className="text-lg mb-6">
              The Hillsdale Community Foundation exists to strengthen community among those who live and work in Hillsdale. 
              The Foundation organizes community events; supports our schools and other institutions; beautifies and sustains 
              our environment; and helps neighbors in need.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Board Members</h2>
            <ul className="space-y-2">
              <li>Jessica Kaplan (Chair, on leave)</li>
              <li>Amy Houchen (Emerita, Acting Chair)</li>
              <li>Dick Hausken (Treasurer)</li>
              <li>Leila Ortega (Secretary)</li>
              <li>Shane Hall (Publisher)</li>
              <li>Jane Harold</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Emeritus Members</h3>
            <ul className="space-y-2">
              <li>Rick Seifert</li>
              <li>Mike Roach</li>
              <li>Michael Reunert</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <p className="text-lg">
              Founded in 2006, the Hillsdale Community Foundation has grown from a small alliance of civic groups 
              into a vibrant community organization serving the Hillsdale neighborhood of Portland, Oregon.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}