import Cursor from '@/components/Cursor'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import About from '@/components/About'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
