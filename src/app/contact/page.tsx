import Container from "@/app/_components/container";

export default function Contact() {
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
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@hillsdalecommunityfoundation.org" className="text-hillsdale-blue hover:underline">
                        info@hillsdalecommunityfoundation.org
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mailing Address</h3>
                    <p className="text-gray-700">
                      Hillsdale Community Foundation<br />
                      1528 SW Pendleton Street<br />
                      Portland, OR 97239
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community Meetings</h3>
                    <p className="text-gray-700">
                      Join us for our regular community meetings to stay informed about our initiatives and get involved.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-hillsdale-blue pl-4">
                    <h3 className="font-semibold text-lg mb-2">Volunteer Opportunities</h3>
                    <p className="text-gray-600 mb-2">Ready to get involved?</p>
                    <a href="/get-involved" className="text-hillsdale-blue hover:underline font-medium">
                      Learn how to volunteer →
                    </a>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">HAT Assistance</h3>
                    <p className="text-gray-600 mb-2">Need community support?</p>
                    <a href="/programs" className="text-hillsdale-blue hover:underline font-medium">
                      Contact HAT team →
                    </a>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Partnership Inquiries</h3>
                    <p className="text-gray-600 mb-2">Interested in partnering?</p>
                    <a href="/resources" className="text-hillsdale-blue hover:underline font-medium">
                      View our partners →
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <section className="bg-white bg-opacity-95 rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>              <form action="https://formspree.io/f/mblyynrw" method="POST" className="space-y-4">
                {/* Hidden fields for Formspree configuration */}
                <input type="hidden" name="_subject" value="New contact from Hillsdale Community Foundation website" />
                <input type="hidden" name="_next" value="https://www.hillsdalecommunityfoundation.org/contact?success=true" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hillsdale-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hillsdale-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hillsdale-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hillsdale-blue"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-hillsdale-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </Container>
      </div>
    </main>
  );
}
