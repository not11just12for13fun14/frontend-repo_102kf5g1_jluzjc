import { useState } from 'react'

const images = {
  Tagli: [
    'https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=1600&auto=format&fit=cropy',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1600&auto=format&fit=crop',
  ],
  Colori: [
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1600&auto=format&fit=crop',
  ],
  Acconciature: [
    'https://images.unsplash.com/photo-1516977103673-45c5396734b1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549237511-6ce91f249f49?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?q=80&w=1600&auto=format&fit=crop',
  ],
}

export default function Gallery() {
  const categories = Object.keys(images)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Galleria lavori</h2>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${active === cat ? 'bg-white text-slate-900' : 'bg-slate-800/70 text-white border border-white/10 hover:bg-slate-700/70'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images[active].map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10">
              <img src={src} alt={`${active} ${i + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
