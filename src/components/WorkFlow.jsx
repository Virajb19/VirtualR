import { checklistItems } from "../constants"
import codeImg from '../assets/code.jpg'
import { CheckCircle2 } from "lucide-react"

export default function WorkFlow() {
    return <div className="flex flex-col items-center p-1 gap-1 mt-28 mb:mt-14">
             <span className="text-white text-6xl tb:text-[2.3rem] mb:text-3xl mb:tracking-wide tb:tracking-wide w-3/4 pt-20 mb:pt-10 text-center border-t border-gray-500">Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">coding workflow</span></span>
             <div id="codeImg" className="flex mb:flex-col mb:items-center p-2 gap-1 w-3/4 tb:w-full mb:w-full">
                 <img src={codeImg} className="w-1/2 mb:w-[80%]"/>
                <div id="checkList" className="flex flex-col justify-around grow p-1 gap-3 mt-5">
                {checklistItems.map((item,i) => {
                    return <div key={i} className="flex gap-1 text-green-400 p-0.5">
                        <CheckCircle2 className="rounded-full bg-neutral-900 p-2" width={50} height={40}/>
                        <div className="flex flex-col gap-2 p-1 mt-0.5">
                        <span className="text-white mb:text-xs">{item.title}</span>
                         <p className="text-[#5D5D5D] mb:text-[0.7rem]">{item.description}</p>
                        </div>
                    </div>
                 })}
                </div>
             </div>
        </div>
} 