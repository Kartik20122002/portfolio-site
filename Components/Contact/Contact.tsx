import { emailId } from "@/INFO";
import Link from "next/link";
import { Lato, Roboto_Slab } from "next/font/google";
import { TbMessageCircle } from "react-icons/tb";
import {motion} from "motion/react";


const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: '300', subsets: ["latin"] });

const Contact = ()=>{
    return <motion.div layout id="contact" className="py-[6rem] bg-white text-black flex flex-col items-center gap-2">
        <motion.div layout  viewport={{ once: true }} initial={{ opacity: 0 , translateY : 100 }} whileInView={{ opacity: 1 , translateY : 0  } } transition={{ duration : 0.35  }} className="icon text-black"><TbMessageCircle className="text-[3.5rem]"/></motion.div>
        <motion.div layout  viewport={{ once: true }} initial={{ opacity: 0 , translateY : 100 }} whileInView={{ opacity: 1 , translateY : 0  } } transition={{ duration : 0.35  }} style={{fontFamily : lato.style.fontFamily}} className="title tracking-[1px] text-3xl font-light">GET IN TOUCH!</motion.div>
        <motion.div layout  viewport={{ once: true }} initial={{ opacity: 0 , translateY : 100 }} whileInView={{ opacity: 1 , translateY : 0  } } transition={{ duration : 0.35 , delay : 0.15}} style={{fontFamily : robotSlab.style.fontFamily}} className="info sm:w-1/3 my-6 md:w-1/4 text-center">
        Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
        </motion.div>
        <motion.span layout viewport={{ once: true }} initial={{ opacity: 0 , translateY : 100 }} whileInView={{ opacity: 1 , translateY : 0  } } transition={{ duration : 0.35 , delay : 0.2  }}>
        <Link style={{fontFamily : lato.style.fontFamily}} href={`mailto:${emailId}`} className="border-[2px] hover:text-white px-4 py-2 border-black duration-300 font-extralight text-xl hover:border-blue-800 hover:bg-blue-800">Say Hello</Link>
        </motion.span>
    </motion.div>
}

export default Contact;