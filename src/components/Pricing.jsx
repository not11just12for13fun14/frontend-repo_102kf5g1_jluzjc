export default function Pricing() {
  const services = [
    { name: 'Taglio Donna', price: '€35', desc: 'Consulenza personalizzata e styling finale' },
    { name: 'Taglio Uomo', price: '€25', desc: 'Classico o moderno, finitura inclusa' },
    { name: 'Colore Completo', price: 'da €50', desc: 'Colore pieno professionale' },
    { name: 'Colpi di Sole / Balayage', price: 'da €70', desc: 'Tecniche avanzate su misura' },
    { name: 'Trattamento Ristrutturante', price: '€30', desc: 'Nutrimento profondo e lucentezza' },
    { name: 'Piega', price: '€20', desc: 'Finish ondulato o liscio' },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Listino prezzi</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{s.name}</h3>
                <span className="text-pink-300 font-bold">{s.price}</span>
              </div>
              <p className="text-slate-300 mt-3 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
