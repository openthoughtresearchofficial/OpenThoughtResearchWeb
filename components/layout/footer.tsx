import Link from 'next/link'
import { Github } from 'lucide-react'

const footerLinks = [
  { name: 'Research', href: '/research' },
  { name: 'Vision', href: '/vision' },
  { name: 'About', href: '/about' },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="mx-auto max-w-[1800px] px-8 py-16 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center transition-all group-hover:border-white">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-sm font-light tracking-wider text-white">
              Open Thought Research
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-8">
            {footerLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center">
          <p className="text-xs font-light text-gray-500 tracking-wider">
            © {new Date().getFullYear()} Open Thought Research. Founded 2026.
          </p>
        </div>
      </div>
    </footer>
  )
}
