import logo from '/logo.png'
import { navItems } from '../constants'
import Button from './Button.jsx'
import { Menu, X} from 'lucide-react'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Navbar() {

   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
   const [closing, setClosing] = useState(false)

   const drawerRef = useRef(null)
   const menuIconRef = useRef(null)
   const xIconRef = useRef(null)
   const navItemsRef = useRef([])

   const { scrollYProgress} = useScroll()
   const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
   })

   useGSAP(() => {
  
     if(mobileDrawerOpen && !closing){
      const tl = gsap.timeline()

      tl.from(drawerRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
      })

      tl.from(navItemsRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        stagger: 0.1
      })
      
       if(xIconRef.current) { 
        gsap.from(xIconRef.current, {
        opacity:0,
        scale: 0,
        duration: 0.6,
        ease: 'elastic.inOut'
      })
    }
  }
    else if(closing) {
    
      const tl = gsap.timeline({
        onComplete: () => {
          setMobileDrawerOpen(false) // ASYNCHRONOUS OPERATION
          setClosing(false)
          // console.log(mobileDrawerOpen)
          gsap.from(menuIconRef.current, {
            opacity: 0,
            scale: 0,
            duration: 0.9,
            ease: 'bounce.inOut',
          })
        }
      })
      
        tl.to(navItemsRef.current ,{
          opacity: 0,
          y: 10,
          duration: 0.3,
          stagger: -0.1
        })
        
        tl.to(drawerRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5
        })

        // console.log(menuIconRef.current)
    }
  }, [mobileDrawerOpen,closing])

    return <>
         <nav id='navbar' className="sticky top-0 text-white p-1 flex items-center justify-between backdrop-blur-lg border-b border-neutral-700/80">
            <div className="flex p-1 gap-3 items-center ml-[5rem] tb:ml-[2rem] mb:ml-2">
              <img className='size-10 mb:size-6 tb:size-8' src={logo} alt='logo'/>
              <span className='text-lg tb:text-sm'>VirtualR</span>
            </div>
            <ul className='mb:hidden flex items-center justify-center space-x-10 tb:space-x-3 text-xs'>
              {navItems.map((item,i) => {
                return <li key={i} className='border border-transparent hover:border-zinc-300 p-2 rounded-full'>
                    <a href={item.href}>{item.label}</a>
                </li>
              })}
            </ul>
           <div id='buttons' className='mb:hidden flex space-x-10 tb:space-x-5 mr-[4rem] tb:mr-[1rem]'>
           <Button border={true}>Sign In</Button>
           <Button>Create an account</Button>
           </div>

         <button onClick={() => mobileDrawerOpen ? setClosing(true) : setMobileDrawerOpen(true)} className='hidden mb:inline mr-1'>
            <X ref={xIconRef} className={clsx(mobileDrawerOpen ? 'block' : 'hidden')}/>
            <Menu ref={menuIconRef} className={clsx(mobileDrawerOpen ? 'hidden' : 'block')}/>
         </button>
      </nav>

      <div id='scroll-meter' className='fixed w-full z-50 top-14 mb:top-[2.8rem] tb:top-12 h-1 bg-[#111111'>
          <motion.div className='h-full bg-orange-700' style={{scaleX, transformOrigin: 'left'}} />
      </div>

      {mobileDrawerOpen && (
         <div ref={drawerRef} className='hidden w-full fixed z-20 mb:block bg-opacity-30 backdrop-blur-md text-white bg-[#161616] space-y-3'>
            <ul className='text-xs flex justify-around p-3'>
              {navItems.map((item,i) => {
                return <li ref={el => navItemsRef.current[i] = el} key={i} className='border border-transparent hover:border-zinc-300 p-1 rounded-full'>
                   <a href={item.href}>{item.label}</a>
                </li>
              })}
            </ul>
            <div id='buttonsMobile' className='flex justify-evenly p-2'>
                <Button border={true}>Sign in</Button>
                <Button>Create an account</Button>
            </div>
         </div>
      )}
    </>
}