import { useEffect } from "react"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"

export default function App() {

    // useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('[data-scroll-container]'),
    //         smooth: true,
    //       })   
    //       return () => scroll.destroy()
    // }, [])

    return <main className="w-full min-h-screen bg-[#111111]">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <WorkFlow />
            <Pricing />
      </main>
}