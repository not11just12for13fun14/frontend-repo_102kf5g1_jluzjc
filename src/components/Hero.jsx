export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-rose-600/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Eleganza e stile per i tuoi capelli
            </h1>
            <p className="mt-6 text-slate-200 leading-relaxed">
              Siamo un atelier di parrucchieri con anni di esperienza, dediti a creare look unici che valorizzano la tua personalità.
              Qualità, ascolto e cura dei dettagli sono la nostra filosofia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">Vedi listino</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-slate-800/70 text-white border border-white/10 hover:bg-slate-700/70 transition-colors">Prenota ora</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
