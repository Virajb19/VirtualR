import {features} from '../constants'

export default function FeatureSection() {
    return <div id="feature" className="flex flex-col items-center lp:space-y-20 space-y-10 p-1">
              <span className="px-3 py-2 text-md font-semibold text-orange-400 bg-[#161616] rounded-full lp:mt-[10rem] mt-[5rem]">FEATURE</span>
              <p className="text-white text-6xl mb:text-3xl">Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your code</span></p>
              <div id='features' className='grid grid-cols-3 tb:grid-cols-2 mb:grid-cols-1 gap-10 mb:gap-3 p-1 w-full lp:w-3/4'>
                 {features.map((feature,i) => {
                    return <div key={i} className='flex flex-wrap justify-start items-end flex-col p-1 gap-1 text-white'>
                         <div className='flex items-center justify-start w-full p-1 gap-7'>
                            <span className='bg-neutral-800 text-orange-600 rounded-full p-2'>{feature.icon}</span>
                            <span className='text-lg mb:text-sm'>{feature.text}</span>
                         </div>
                         <p className='text-[#4A4A4A] w-3/4 text-sm text-left'>{feature.description}</p>
                    </div>
                 })}
              </div>
        </div>
}