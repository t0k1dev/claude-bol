import Hero from './components/Hero'
import About from './components/About'
import SubscribeForm from './components/SubscribeForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Hero />
      <About />
      <SubscribeForm />
      <Footer />
    </div>
  )
}
