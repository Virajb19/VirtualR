import { pricingOptions } from "../constants"
import { CheckCircle2 } from "lucide-react"

export default function Pricing() { 

    return <main className="flex flex-col items-center p-1 gap-1">
             <span className="text-white text-6xl tb:text-5xl mb:text-4xl mt-14 mb-7">Pricing</span>
             <div id="cards" className="flex mb:flex-wrap p-1 gap-3 tb:gap-1 justify-center w-[70%] tb:w-full mb:w-full">
                  {pricingOptions.map((option, i) => {
                    return <Card key={i} title={option.title} price={option.price} features={option.features}/>
                  })}
             </div>
        </main>
}

function Card({title, price, features}){
    return <div className="flex flex-col basis-1/3 mb:grow p-8 tb:p-5 gap-5 tb:gap-3 mb:gap-2 text-white rounded-lg border border-[#242424]">
           <span className="text-2xl lp:text-3xl flex mb:justify-center items-end gap-2">
            {title}
            {title == 'Pro' && <span className="text-orange-500 text-lg tb:text-base">(Most Popular)</span>}
           </span>
           <h2 className="text-4xl">{price}{" "}<span className="text-sm text-[#979797]">/Month</span></h2>
           {features.map((feature,i) => {
            return <div key={i} className="flex p-1 gap-1">
                <CheckCircle2 />
                <span className="tb:text-xs">{feature}</span>
            </div>
           })}
           <button className="hover:bg-[#5E210F] hover:border-transparent duration-150 p-2 rounded-lg border-2 border-[#34231C] mt-10 tb:mt-7 mb:mt-5">Subscribe</button>
    </div>
}