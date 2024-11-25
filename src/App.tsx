import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Features from './components/Features'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

