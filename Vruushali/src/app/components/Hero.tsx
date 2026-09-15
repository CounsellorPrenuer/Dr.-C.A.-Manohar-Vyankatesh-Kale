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