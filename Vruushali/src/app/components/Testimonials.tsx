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