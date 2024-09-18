import Button from "./Button";
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { useMediaQuery } from "react-responsive";

export default function HeroSection() {

   const isMobile = useMediaQuery({maxWidth: 640})

    return <div className="text-white flex-center flex-col">
              <div id="heading" className="flex flex-col items-center p-1 gap-9 mt-20 mb:mt-12">
                <p className="text-center text-7xl tb:text-5xl mb:text-3xl font-medium p-1 ">VirtualR build tools <span className="text-orange-500">for</span> <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900">developers</span></p>
                <p className="text-center tb:text-sm lp:text-xl text-[#606060] p-1">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. {!isMobile && <br />}
                Get started today and turn your imagination into immersive reality!</p>
                <div className="flex gap-6 p-1">
                    <Button padding='p-3 tb:p-3'>Start for free</Button>
                    <Button padding='p-3 tb:p-3' border={true}>Documentation</Button>
                </div>
              </div>
              <div id="videos" className="flex justify-center flex-wrap p-1 mb:p-4 gap-5 mt-[5rem] mb:mt-[2rem]">
                 <video className="video" src={video1} loop autoPlay muted />
                 <video className="video" src={video2} loop autoPlay muted />
              </div>
        </div>
}