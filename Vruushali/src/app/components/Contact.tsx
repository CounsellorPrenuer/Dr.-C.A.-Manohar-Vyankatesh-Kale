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