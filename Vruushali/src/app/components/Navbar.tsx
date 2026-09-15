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