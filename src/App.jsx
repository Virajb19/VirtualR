import { useEffect } from "react"
import Navbar from "./components/Navbar"
import 'locomotive-scroll/dist/locomotive-scroll.css'
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Lenis from "lenis"

export default function App() {

      useEffect(() => {
            const lenis = new Lenis({
                  duration: 1.5,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  smooth: true,
                  infinite: false,
                })

                function raf(time) {
                  lenis.raf(time);
                  requestAnimationFrame(raf)
                }
            
                requestAnimationFrame(raf)
            
                return () => lenis.destroy()
      })

    return <main className="w-full min-h-screen bg-[#111111]">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <WorkFlow />
            <Pricing />
            <Testimonials />
            <Footer />
      </main>
}