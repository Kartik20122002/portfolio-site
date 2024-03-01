import Link from "next/link";
import { Lato , Roboto_Slab } from "next/font/google";

const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]})

const Resume = ()=>{
    return <div id="resume" className="relative min-h-[40vh]">
        <div className="overlay w-full h-full text-white flex flex-col gap-8 justify-center items-center">
        <div style={{fontFamily : lato.style.fontFamily}} className="heading font-light tracking-[1px] text-3xl">CHECK OUT MY RÉSUMÉ!</div>
        <Link style={{fontFamily : lato.style.fontFamily}}
        className=" font-light tracking-[1px] px-5 py-3 duration-300 shadow-md rounded glass ease-in-out border border-t-[#f8f8f848] border-x-[#ffffff11] border-b-[#ffffff02]
        hover:bg-[rgba(254,254,254,0.2)] bg-[rgba(254,254,254,0.1)]"
         target="_blank" href={'./PDFs/Resume.pdf'} >
            Grab A Copy
        </Link>
        </div>
    </div>
}

export default Resume;