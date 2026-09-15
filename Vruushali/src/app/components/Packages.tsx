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