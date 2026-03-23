const values = [
  {
    name: 'Apertura',
    description: 'Compartimos el conocimiento libremente, mantenemos las discusiones transparentes y damos la bienvenida a perspectivas diversas.',
  },
  {
    name: 'Calidad',
    description: 'Mantenemos altos estándares en nuestro trabajo, escribimos código limpio y damos retroalimentación reflexiva.',
  },
  {
    name: 'Colaboración',
    description: 'Preferimos trabajar juntos antes que en silos. Cada contribución importa.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-cream-950 mb-4">Sobre la comunidad</h2>
        <p className="text-cream-600 leading-relaxed mb-4">
          Somos la primera comunidad boliviana dedicada a Claude y la inteligencia artificial de Anthropic. Aquí conviven programadores, diseñadores, emprendedores, docentes y cualquier persona curiosa que quiera crear con IA, sin importar su nivel de experiencia técnica.
        </p>
        <p className="text-cream-600 leading-relaxed mb-14">
          Desde Bolivia para el mundo: compartimos recursos, organizamos encuentros y construimos juntos proyectos que muestran lo que es posible cuando la creatividad se une a la tecnología.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.name} className="border-t border-cream-200 pt-5">
              <h3 className="font-medium text-cream-950 mb-2">{value.name}</h3>
              <p className="text-sm text-cream-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
