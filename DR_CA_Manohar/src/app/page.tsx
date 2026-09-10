import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function Home() {
  const homePage = await client.fetch(`*[_type == "homePage"][0]`);
  const founder = await client.fetch(`*[_type == "founder"][0]`);
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);
  const contactInfo = await client.fetch(`*[_type == "contactInfo"][0]`);
  const services = await client.fetch(`*[_type == "service"] | order(order asc)`);
  const packages = await client.fetch(`*[_type == "package"] | order(order asc)`);
  const testimonials = await client.fetch(`*[_type == "testimonial"] | order(order asc)`);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-900">{siteSettings?.brandName || 'Mentoria'}</div>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#founder" className="hover:text-blue-600">About Founder</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#packages" className="hover:text-blue-600">Mentoria Packages</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-blue-50 py-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-6">{homePage?.heroHeading}</h1>
            <p className="text-xl text-gray-700 mb-8">{homePage?.heroDescription}</p>
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              {homePage?.ctaText || 'Get Started'}
            </a>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              {founder?.image && (
                <img src={urlFor(founder.image).width(600).url()} alt={founder.name} className="rounded-lg shadow-xl" />
              )}
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{founder?.name}</h2>
              <h3 className="text-xl text-blue-600 mb-6">{founder?.title}</h3>
              <p className="text-gray-700 mb-4">{founder?.bio}</p>
              <p className="text-gray-700 mb-4 font-semibold">{founder?.experience}</p>
              <p className="text-gray-700 italic">"{founder?.philosophy}"</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-gray-50 py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service: any) => (
                <div key={service._id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mentoria Packages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg: any) => (
                <div key={pkg._id} className="bg-white border rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  {pkg.image && (
                    <img src={urlFor(pkg.image).height(300).url()} alt={pkg.name} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">{pkg.targetAudience}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-extrabold text-gray-900 mb-6">₹{pkg.price}</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features?.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="block w-full py-3 px-4 bg-blue-50 text-blue-700 text-center font-semibold rounded-lg hover:bg-blue-100 transition">Choose Package</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-blue-900 py-20 px-6 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="text-center text-blue-200">
              {testimonials.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((test: any) => (
                    <div key={test._id} className="bg-blue-800 p-8 rounded-xl text-left">
                      <p className="italic mb-6">"{test.quote}"</p>
                      <div className="font-bold">{test.name}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Testimonials coming soon!</p>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 bg-blue-600 text-white">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-200 text-sm uppercase tracking-wide">Phone</h4>
                    <p className="text-lg">{contactInfo?.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 text-sm uppercase tracking-wide">Email</h4>
                    <p className="text-lg">{contactInfo?.email}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 text-sm uppercase tracking-wide">WhatsApp</h4>
                    <p className="text-lg">{contactInfo?.whatsapp}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 text-sm uppercase tracking-wide">Address</h4>
                    <p>{contactInfo?.address}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="button" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">{siteSettings?.brandName}</h3>
            <p className="mb-6 max-w-sm">{siteSettings?.footerText}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#packages" className="hover:text-white transition">Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {contactInfo?.linkedin && <li><a href={contactInfo.linkedin} className="hover:text-white transition">LinkedIn</a></li>}
              {contactInfo?.instagram && <li><a href={contactInfo.instagram} className="hover:text-white transition">Instagram</a></li>}
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; {new Date().getFullYear()} {siteSettings?.brandName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
