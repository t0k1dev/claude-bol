export default function Hero() {
  return (
    <section className="py-28 px-6 text-center" style={{ backgroundColor: '#c46849' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <img src="/claude-logo.svg" alt="Claude" className="w-16 h-16" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
          Comunidad Claude Bolivia
        </h1>
        <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
          La comunidad boliviana de creadores, desarrolladores y emprendedores que exploran, construyen y comparten lo que es posible con Claude y la inteligencia artificial.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#subscribe"
            className="inline-block bg-white text-cream-950 px-7 py-3 rounded font-semibold shadow hover:bg-cream-100 transition-colors"
          >
            Mantente informado
          </a>
          <a
            href="https://rodrigo590.typeform.com/to/BdzCKAwD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white text-white px-7 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Ayúdanos a construir esto
          </a>
        </div>
      </div>
    </section>
  )
}
