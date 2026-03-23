import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

export default function OrganizeForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      await addDoc(collection(db, 'organizers'), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      })
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="organize" className="bg-white py-20 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-cream-950 mb-2">Ayúdanos a construir esto</h2>
        <p className="text-cream-600 mb-8">
          El equipo organizador da forma a los eventos, curada recursos y mantiene la comunidad en marcha. Si quieres contribuir con tu tiempo y energía, nos encantaría saber de ti.
        </p>

        {status === 'success' ? (
          <div className="bg-cream-50 border border-cream-200 text-cream-700 rounded-lg px-5 py-4">
            Gracias por comunicarte. Te haremos llegar los próximos pasos.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="org-name" className="block text-sm font-medium text-cream-700 mb-1.5">
                Nombre
              </label>
              <input
                id="org-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-cream-200 rounded bg-white px-4 py-2.5 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="org-email" className="block text-sm font-medium text-cream-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                id="org-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-cream-200 rounded bg-white px-4 py-2.5 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="tu@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="org-message" className="block text-sm font-medium text-cream-700 mb-1.5">
                ¿Por qué quieres participar?
              </label>
              <textarea
                id="org-message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border border-cream-200 rounded bg-white px-4 py-2.5 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                placeholder="Cuéntanos un poco sobre ti y qué te gustaría aportar."
              />
            </div>
            {status === 'error' && (
              <p className="text-sm text-red-700">Algo salió mal. Por favor, inténtalo de nuevo.</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-accent text-white py-2.5 rounded font-medium hover:bg-accent-hover transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando…' : 'Postularme como organizador'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
