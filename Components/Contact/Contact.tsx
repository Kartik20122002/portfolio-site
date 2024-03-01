import { emailId } from "@/INFO";
import Link from "next/link";
import { Lato, Roboto_Slab } from "next/font/google";
import { TbMessageCircle2, TbMessageCircle2Filled } from "react-icons/tb";



const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: '300', subsets: ["latin"] });

const Contact = ()=>{
    return <div id="contact" className="py-[6rem] bg-[rgb(240,240,240)] flex flex-col items-center gap-2">
        <div className="icon text-black"><TbMessageCircle2 className="text-[3.5rem]"/></div>
        <div style={{fontFamily : lato.style.fontFamily}} className="title tracking-[1px] text-3xl font-light">GET IN TOUCH!</div>
        <div style={{fontFamily : robotSlab.style.fontFamily}} className="info sm:w-1/3 my-6 md:w-1/4 text-center">
        Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
        </div>
        <Link style={{fontFamily : lato.style.fontFamily}} href={`mailto:${emailId}`} className="border-[2px] hover:text-white px-4 py-2 border-black duration-300 font-extralight text-xl hover:border-blue-800 hover:bg-blue-800">Say Hello</Link>
    </div>
}

export default Contact;