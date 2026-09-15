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