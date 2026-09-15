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