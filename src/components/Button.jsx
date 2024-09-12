import { twMerge } from "tailwind-merge";

export default function Button({children, border, padding}) {
    return <button className={twMerge("text-[0.7rem] lp:text-sm p-2 tb:p-1 rounded-md hover:-translate-y-1 duration-75", 
                   border ? "bg-transparent border-2 border-gray-300" : "bg-gradient-to-r from-[#E95F16] to-[#943013]", padding)}>
         {children}
    </button>
}