import { useMediaQuery } from "react-responsive"
import { testimonials } from "../constants"

export default function Testimonials() {

   const isMobile = useMediaQuery({maxWidth : 640})

    return <main className="flex flex-col items-center p-1 gap-1 text-white">
            <h2 className="text-5xl tb:text-4xl mb:text-2xl tracking-wide font-semibold my-14">What people are saying</h2>
            <div className="grid grid-cols-3 tb:grid-cols-2 mb:grid-cols-1 w-3/4 tb:w-[90%] mb:w-full p-1 gap-10">
             {testimonials.map((testimonial, i) => {
                return <div key={i} className="flex flex-col justify-between p-5 tb:p-4 gap-1 bg-[#161616] border border-neutral-600 rounded-lg">
                     <p className="text-[#B0B0B0] text-sm">{testimonial.text}</p>
                     <div className="flex items-center p-1 gap-3">
                        <img className="rounded-full border border-gray-200" src={testimonial.image} width={40}/>
                         <div className="flex flex-col p-1 gap-1 text-sm">
                           <span>{testimonial.user}</span>
                           <span className="text-neutral-700 italic">{testimonial.company}</span>
                        </div>
                     </div>
                </div>
             })}
            </div>
        </main>
}