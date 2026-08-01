import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24 min-h-screen flex items-center">
        <div className="mx-auto max-w-[1400px] px-8 py-32 md:px-16 lg:px-24">
          <div className="space-y-12">
            <h1 className="text-[8rem] md:text-[12rem] font-light tracking-tighter leading-none text-gray-800">
              404
            </h1>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                Page Not Found
              </h2>
              
              <p className="text-lg text-gray-400 font-light max-w-xl">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>

            <div className="flex gap-8 pt-8">
              <Link
                href="/"
                className="text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors border-b border-gray-800 hover:border-white pb-1"
              >
                Home
              </Link>
              <Link
                href="/research"
                className="text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors border-b border-gray-800 hover:border-white pb-1"
              >
                Research
              </Link>
              <Link
                href="/about"
                className="text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors border-b border-gray-800 hover:border-white pb-1"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
