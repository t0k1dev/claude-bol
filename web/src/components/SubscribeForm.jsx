import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

export default function SubscribeForm() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      await addDoc(collection(db, 'subscribers'), {
        name: form.name.trim(),
        email: form.email.trim(),
createdAt: serverTimestamp(),
      })
      setStatus('success')
      setForm({ name: '', email: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="subscribe" className="bg-cream-100 py-20 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-cream-950 mb-2">Mantente informado</h2>
        <p className="text-cream-600 mb-8">Recibe notificaciones sobre eventos, recursos y novedades de la comunidad.</p>

        {status === 'success' ? (
          <div className="bg-cream-100 border border-cream-200 text-cream-700 rounded-lg px-5 py-4">
            ✅ Ya estás suscrito. Estaremos en contacto pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="sub-name" className="block text-sm font-medium text-cream-700 mb-1.5">
                Nombre
              </label>
              <input
                id="sub-name"
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
              <label htmlFor="sub-email" className="block text-sm font-medium text-cream-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                id="sub-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-cream-200 rounded bg-white px-4 py-2.5 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="tu@ejemplo.com"
              />
            </div>
{status === 'error' && (
              <p className="text-sm text-red-700">Algo salió mal. Por favor, inténtalo de nuevo.</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full text-white py-3 rounded font-semibold text-base tracking-wide shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              style={{ backgroundColor: '#c46849' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a85538'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#c46849'}
            >
              {status === 'loading' ? 'Suscribiendo…' : 'Suscribirse'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
