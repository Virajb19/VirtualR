import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function App(){

    const inputs = [{text: 'Enter your email...', icon: <Mail className='size-4 lp:size-5 text-[#AFAFAF]'/>}, {text: 'Enter your password...', icon: <Lock className='size-4 lp:size-5 text-[#AFAFAF]'/>, Eyes: [<Eye />, <EyeOff />]}]

 return <div className="w-full min-h-screen overflow-auto bg-[#D3D3D3] flex-center">
     <div id="login" className="relative bg-white w-[80%] lp:max-w-[30%] flex flex-col items-center gap-1 overflow-hidden rounded-2xl">
        <div id="oval" className="bg-gradient-to-r from-[#9238ff] to-[#d322ff] w-[100vw] lp:w-[35vw] h-[15vh] lp:h-[25vh]"></div>
        <div id="heading" className="absolute top-[15%] lp:top-[20%] flex flex-col p-1 lp:gap-3 text-gray-200">
             <span className="text-2xl lp:text-5xl font-extrabold text-center">Welcome</span>
             <p className="text-xs lp:text-sm text-center">Enter the information you entered <br />while registering</p>
        </div>
        <div id='inputs' className='flex flex-col p-1 gap-4 w-3/4 mt-[2.5vh]'>
          {inputs.map((input,i) => {
            return <Input key={i} text={input.text} icon={input.icon} Eyes={input.Eyes || null}/>
          })}
        </div>
     </div>
 </div>
}

function Input({text, icon, Eyes}){
  
     const [isFocus, setIsFocus] = useState(false)
     const [isVisible, setIsVisible] = useState(false)

    return <div className={twMerge("flex p-1 lp:px-3 lp:py-2 gap-1 items-center border border-zinc-600 rounded-full", isFocus && "border-2 border-pink-600")}>
         {icon}
         <input onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type={text.includes('password') ? isVisible ? 'text' : 'password' : 'text'} placeholder={text} className='bg-transparent px-2 grow focus:outline-none text-[0.6rem] lp:text-sm text-zinc-700 placeholder:text-zinc-700'/>
         {Eyes && <button onClick={() => setIsVisible(!isVisible)}>{Eyes && (isVisible ? Eyes[1] : Eyes[0])}</button>}
    </div>
}