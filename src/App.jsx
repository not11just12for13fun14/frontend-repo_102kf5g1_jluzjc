import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Atelier Capelli — Tutti i diritti riservati</p>
          <a href="#home" className="text-sm text-slate-300 hover:text-white">Torna su</a>
        </div>
      </footer>
    </div>
  )
}

export default App
