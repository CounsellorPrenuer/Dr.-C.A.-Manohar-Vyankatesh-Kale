import os

files = {
    'src/app/studio/[[...index]]/page.tsx': '''
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
''',
    'src/app/studio/[[...index]]/layout.tsx': '''
export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio backend',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
''',
    'src/lib/queries.ts': '''
import { groq } from 'next-sanity'

export const homePageQuery = groq`*[_type == "homePage"][0]`
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const founderQuery = groq`*[_type == "founder"][0]`
export const servicesQuery = groq`*[_type == "service"] | order(order asc)`
export const packagesQuery = groq`*[_type == "mentoriaPackage"] | order(order asc)`
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc)`
export const contactQuery = groq`*[_type == "contact"][0]`
''',
    'src/app/page.tsx': '''
import { client } from '../../sanity/lib/client'
import { 
  homePageQuery, siteSettingsQuery, founderQuery, 
  servicesQuery, packagesQuery, testimonialsQuery, contactQuery 
} from '../lib/queries'
import Hero from './components/Hero'
import AboutFounder from './components/AboutFounder'
import Services from './components/Services'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { urlForImage } from '../../sanity/lib/image'

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [home, settings, founder, services, packages, testimonials, contact] = await Promise.all([
    client.fetch(homePageQuery),
    client.fetch(siteSettingsQuery),
    client.fetch(founderQuery),
    client.fetch(servicesQuery),
    client.fetch(packagesQuery),
    client.fetch(testimonialsQuery),
    client.fetch(contactQuery),
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <Hero data={home} />
      <AboutFounder data={founder} />
      <Services data={services} />
      <Packages data={packages} />
      <Testimonials data={testimonials} />
      <Contact data={contact} />
    </div>
  )
}
''',
    'src/app/components/Hero.tsx': '''
export default function Hero({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section id="home" className="py-20 bg-blue-50 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">{data.heroHeading || 'Brain Voyages'}</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">{data.heroDescription || 'Empowering minds through cognitive enhancement and career guidance.'}</p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          {data.ctaText || 'Get Started'}
        </a>
      </div>
    </section>
  )
}
''',
    'src/app/components/AboutFounder.tsx': '''
import { urlForImage } from '../../../sanity/lib/image'

export default function AboutFounder({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {data.photo ? (
            <img src={urlForImage(data.photo).url()} alt={data.name} className="rounded-lg shadow-xl" />
          ) : (
            <img src="/founder.png" alt="Founder" className="rounded-lg shadow-xl" />
          )}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About {data.name || 'Founder'}</h2>
          <h3 className="text-xl text-blue-600 mb-6">{data.title}</h3>
          <p className="text-gray-700 mb-4 whitespace-pre-line">{data.biography}</p>
          <p className="text-gray-700 whitespace-pre-line">{data.experience}</p>
        </div>
      </div>
    </section>
  )
}
''',
    'src/app/components/Services.tsx': '''
import { urlForImage } from '../../../sanity/lib/image'

export default function Services({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {service.image && (
                <img src={urlForImage(service.image).url()} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              )}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.features && (
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
''',
    'src/app/components/Packages.tsx': '''
import { urlForImage } from '../../../sanity/lib/image'

export default function Packages({ data }: { data: any[] }) {
  if (!data || data.length === 0) return (
     <section id="packages" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mentoria Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <img src={`/Mentoria${i}.png`} alt={`Package ${i}`} className="w-full h-auto" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Package {i}</h3>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Learn More</button>
                </div>
             </div>
          ))}
        </div>
      </div>
     </section>
  );
  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mentoria Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              {pkg.image && (
                <img src={urlForImage(pkg.image).url()} alt={pkg.name} className="w-full h-auto" />
              )}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{pkg.price}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>{pkg.duration}</p>
                  <p>{pkg.sessions}</p>
                </div>
                {pkg.features && (
                  <ul className="text-left list-disc pl-5 text-sm text-gray-600 mb-6">
                    {pkg.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Enquire Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
''',
    'src/app/components/Testimonials.tsx': '''
import { urlForImage } from '../../../sanity/lib/image'

export default function Testimonials({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((test, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              {test.clientPhoto && (
                <img src={urlForImage(test.clientPhoto).url()} alt={test.clientName} className="w-20 h-20 rounded-full mb-4 object-cover" />
              )}
              <p className="text-gray-700 italic mb-4">"{test.quote}"</p>
              <h4 className="font-bold text-gray-900">{test.clientName}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
''',
    'src/app/components/Contact.tsx': '''
export default function Contact({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-2"><strong>Email:</strong> {data.email}</p>
            <p className="mb-2"><strong>Phone:</strong> {data.phone}</p>
            {data.whatsapp && <p className="mb-2"><strong>WhatsApp:</strong> {data.whatsapp}</p>}
            {data.address && <p className="mb-2"><strong>Address:</strong> {data.address}</p>}
          </div>
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>}
              {data.instagram && <a href={data.instagram} target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">Instagram</a>}
              {data.facebook && <a href={data.facebook} target="_blank" rel="noreferrer" className="text-blue-800 hover:underline">Facebook</a>}
              {data.twitter && <a href={data.twitter} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Twitter</a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
''',
    'src/app/components/Navbar.tsx': '''
import Link from 'next/link'

export default function Navbar({ settings }: { settings: any }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {settings?.logo ? (
            <img src={settings.logo} alt="Logo" className="h-12" />
          ) : (
            <img src="/logo.png" alt="Brain Voyages Logo" className="h-12" />
          )}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Founder</Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
          <Link href="#packages" className="text-gray-700 hover:text-blue-600 font-medium">Mentoria Packages</Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}
''',
    'src/app/components/Footer.tsx': '''
export default function Footer({ settings, contact }: { settings: any, contact: any }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {settings?.logo ? (
            <img src={settings.logo} alt="Logo" className="h-10 mb-4 brightness-0 invert" />
          ) : (
            <img src="/logo.png" alt="Brain Voyages Logo" className="h-10 mb-4 brightness-0 invert" />
          )}
          <p className="text-sm">{settings?.footerInformation || 'Empowering minds and building successful careers through expert guidance.'}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Founder</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#packages" className="hover:text-white">Mentoria Packages</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Info</h4>
          <p className="text-sm mb-2">{contact?.email}</p>
          <p className="text-sm mb-4">{contact?.phone}</p>
          <div className="flex gap-4">
            {contact?.linkedin && <a href={contact.linkedin} target="_blank" className="hover:text-white">LI</a>}
            {contact?.instagram && <a href={contact.instagram} target="_blank" className="hover:text-white">IG</a>}
            {contact?.facebook && <a href={contact.facebook} target="_blank" className="hover:text-white">FB</a>}
            {contact?.twitter && <a href={contact.twitter} target="_blank" className="hover:text-white">X</a>}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Brain Voyages. All rights reserved.</p>
      </div>
    </footer>
  )
}
''',
    'src/app/layout.tsx': '''
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { client } from '../sanity/lib/client'
import { siteSettingsQuery, contactQuery } from '../lib/queries'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brain Voyages - Vruushali Mirajjgaonkar',
  description: 'Career Guidance, Workshops & Seminars, Admission Guidance by Vruushali Mirajjgaonkar',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [settings, contact] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(contactQuery)
  ])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar settings={settings} />
        {children}
        <Footer settings={settings} contact={contact} />
      </body>
    </html>
  )
}
'''
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip())
