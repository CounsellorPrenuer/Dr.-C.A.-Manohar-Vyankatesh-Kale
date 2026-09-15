'use client';
import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import { 
  homePageQuery, siteSettingsQuery, founderQuery, 
  servicesQuery, packagesQuery, testimonialsQuery, contactQuery 
} from '../lib/queries';
import Hero from './components/Hero';
import AboutFounder from './components/AboutFounder';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const [data, setData] = useState<any>({
    home: null,
    settings: null,
    founder: null,
    services: [],
    packages: [],
    testimonials: [],
    contact: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [home, settings, founder, services, packages, testimonials, contact] = await Promise.all([
          client.fetch(homePageQuery),
          client.fetch(siteSettingsQuery),
          client.fetch(founderQuery),
          client.fetch(servicesQuery),
          client.fetch(packagesQuery),
          client.fetch(testimonialsQuery),
          client.fetch(contactQuery),
        ]);
        setData({ home, settings, founder, services, packages, testimonials, contact });
      } catch (error) {
        console.error("Error fetching Sanity data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading live content...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar settings={data.settings} />
      <Hero data={data.home} />
      <AboutFounder data={data.founder} />
      <Services data={data.services} />
      <Packages data={data.packages} />
      <Testimonials data={data.testimonials} />
      <Contact data={data.contact} />
      <Footer settings={data.settings} contact={data.contact} />
    </div>
  );
}