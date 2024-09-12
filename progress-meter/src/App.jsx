import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

export default function App(){

    let spanRef = useRef(null)
    let digitRef = useRef(null)
   const [digit, setDigit] = useState(0)

    useGSAP(() => {
      if(spanRef.current) {
        const anime = gsap.to(spanRef.current, {
            width: '100%',
            backgroundColor: 'green',
            duration: 10,
            ease: 'linear',
            onUpdate: () => {
                let progress = anime.progress()
                setDigit(Math.ceil(progress * 10))
            }
           })
      }
        
       gsap.from(digitRef.current, {
        opacity: 0,
        duration: 0.2,
        y: -30,
        ease: 'bounce.out'
       })
       
       gsap.to('#box', {
         width: '10rem',
         height: '10rem',
         duration: 2,
         ease: 'steps(10)'
       })
    }, [])

 return <div className="w-full min-h-screen overflow-auto bg-zinc-800 flex-center flex-col relative">
    <div id="box" className="absolute flex flex-col top-3 left-5 size-10 bg-red-700"></div>
     <div id="meter" className="flex p-1 items-center">
        <div className="size-14 bg-purple-800 rounded-lg rotate-45 flex-center">
            <span ref={digitRef} id="digit" className="-rotate-45 text-white font-extrabold text-4xl">{digit}</span>
        </div>
        <div className="h-4 w-[15vw] bg-transparent border border-gray-400 rounded-full">
        <span ref={spanRef} className="block bg-purple-700 h-full rounded-full w-0"></span>
        </div>
     </div>
 </div>
}
