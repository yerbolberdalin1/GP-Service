import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Business from './components/Business'
import Equipment from './components/Equipment'
import Advantages from './components/Advantages'
import EquipmentDocuments from './components/EquipmentDocuments'
import About from './components/About'
import HowWeWork from './components/HowWeWork'
import QuoteForm from './components/QuoteForm'
import FAQ from './components/FAQ'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Business />
        <Equipment />
        <Advantages />
        <EquipmentDocuments />
        <About />
        <HowWeWork />
        <QuoteForm />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
