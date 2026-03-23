export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-cream-800" style={{ backgroundColor: '#1a1918' }}>
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <span>&copy; {new Date().getFullYear()} Comunidad Claude Bolivia</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="/guidelines"
            className="hover:text-white transition-colors"
          >
            Normas de la comunidad
          </a>
        </div>
      </div>
    </footer>
  )
}
