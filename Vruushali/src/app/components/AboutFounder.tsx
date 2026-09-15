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