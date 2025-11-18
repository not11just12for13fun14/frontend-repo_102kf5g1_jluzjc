import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Errore di invio')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Prenotazioni & Contatti</h2>
            <p className="text-slate-300">Scrivici per informazioni o per richiedere una prenotazione. Ti ricontatteremo al più presto.</p>
            <div className="mt-6 space-y-2 text-slate-200">
              <p><strong>Telefono:</strong> +39 000 000 000</p>
              <p><strong>Indirizzo:</strong> Via Esempio 123, Milano</p>
              <p><strong>Orari:</strong> Mar-Sab 9:30–19:30</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-200 mb-1">Nome</label>
                <input name="name" required className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-1">Telefono</label>
                <input name="phone" className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Es. +39..." />
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-1">Email</label>
                <input type="email" name="email" className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="tu@email.it" />
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-1">Servizio</label>
                <select name="service" className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Taglio Donna</option>
                  <option>Taglio Uomo</option>
                  <option>Colore</option>
                  <option>Trattamento</option>
                  <option>Piega</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-1">Data preferita</label>
                <input name="preferred_date" placeholder="AAAA-MM-GG" className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-1">Orario preferito</label>
                <input name="preferred_time" placeholder="HH:MM" className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-200 mb-1">Messaggio</label>
                <textarea name="message" rows="4" className="w-full rounded-md bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Dettagli o richieste specifiche..." />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">Invia richiesta</button>

            {status === 'loading' && <p className="mt-3 text-slate-300">Invio in corso...</p>}
            {status === 'success' && <p className="mt-3 text-emerald-400">Richiesta inviata con successo!</p>}
            {status === 'error' && <p className="mt-3 text-rose-400">Si è verificato un errore. Riprova.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
