'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Research', href: '/research' },
  { name: 'About', href: '/about' },
  { name: 'Vision', href: '/vision' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-900' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between p-6 lg:px-24" aria-label="Global">
        {/* Logo - Responsive sizing */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <Image
              src="/assets/logo/logo.png"
              alt="Open Thought Research"
              fill
              className="object-contain transition-opacity group-hover:opacity-80"
              sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-light tracking-wider transition-colors',
                pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-900">
          <div className="space-y-1 p-6">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-3 text-base font-light tracking-wider',
                  pathname === item.href ? 'text-white' : 'text-gray-400'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
