import { Instagram, Facebook, MessageCircle, Phone, Scissors, Menu, X, Tiktok } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Galleria' },
    { href: '#pricing', label: 'Listino' },
    { href: '#contact', label: 'Prenota' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-tight">Atelier Capelli</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-200 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-200 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-slate-200 hover:text-white">
              <Tiktok className="w-5 h-5" />
            </a>
            <a href="https://wa.me/390000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-3 py-1.5 rounded-md transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://instagram.com" className="text-slate-200"><Instagram className="w-5 h-5" /></a>
                <a href="https://facebook.com" className="text-slate-200"><Facebook className="w-5 h-5" /></a>
                <a href="https://tiktok.com" className="text-slate-200"><Tiktok className="w-5 h-5" /></a>
                <a href="https://wa.me/390000000000" className="ml-auto inline-flex items-center gap-2 bg-emerald-500 text-white text-sm font-medium px-3 py-1.5 rounded-md">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
