import { pricingOptions } from "../constants"
import { CheckCircle2 } from "lucide-react"

export default function Pricing() { 

    return <main className="flex flex-col items-center p-1 gap-1">
             <span className="text-white text-6xl mb:text-4xl mt-14 mb-7">Pricing</span>
             <div id="cards" className="flex p-1 gap-3 justify-center  w-full">
                  {pricingOptions.map((option, i) => {
                    return <Card key={i} title={option.title} price={option.price} features={option.features}/>
                  })}
             </div>
        </main>
}

function Card({title, price, features}){
    return <div className="flex flex-col p-8 gap-5 text-white rounded-lg border border-[#242424]">
           <span className="text-3xl">
            {title}
            {title == 'Pro' && <span className="text-orange-500 text-base">{"("}Most Popular{")"}</span>}
           </span>
           <h2 className="text-4xl">{price}{" "}<span className="text-sm text-[#979797]">/Month</span></h2>
           {features.map((feature,i) => {
            return <div key={i} className="flex p-1 gap-1">
                <CheckCircle2 />
                <span>{feature}</span>
            </div>
           })}
           <button className="hover:bg-[#5E210F] duration-100 p-2 rounded-lg border border-[#34231C]">Subscribe</button>
    </div>
}