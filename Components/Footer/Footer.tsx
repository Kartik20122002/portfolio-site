import { name } from "@/INFO";
import Lenis from "@studio-freight/lenis";
import { cubicBezier } from "motion/react";
import { Lato, Roboto_Slab } from "next/font/google";
import Link from "next/link";
import {FaFacebookF , FaLinkedinIn , FaInstagram , FaTwitter ,FaGithub ,FaRegCopyright  } from "react-icons/fa"
import { BsRocket } from "react-icons/bs";

const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: '300', subsets: ["latin"] });

const SocialLinks = [
    {id : 'socialFa', color : '#004f9c' , name : "Facebook" , icon : <FaFacebookF/> , link : 'https://www.facebook.com/kartik.hatwar.79'},
    {id : 'socialLi', color : 'blue' , name : "LinkedIn" , icon : <FaLinkedinIn/> , link : 'https://www.linkedin.com/in/kartikhatwar/'},
    {id : 'socialIn', color : 'blue' , name : "Instagram" , icon : <FaInstagram/> , link : 'https://www.instagram.com/kartik_hatwar98/'},
    {id : 'socialTw', color : 'blue' , name : "Twitter" , icon : <FaTwitter/> , link : 'https://twitter.com/KartikHatwar98'},
    {id : 'socialGh', color : 'blue' , name : "Github" , icon : <FaGithub/> , link : 'https://github.com/Kartik20122002'},
]

const Footer = ()=>{

    const goToHome = ()=>{
    const lenis = new Lenis();

    const raf = (time : any)=>{
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    const ele = document.querySelector('#home') as HTMLElement;
    if(ele) lenis.scrollTo(ele, {easing : cubicBezier(0.5, 0, 0.75, 0), duration : 1.2})

    requestAnimationFrame(raf);

    return ()=>lenis.destroy();
    }


    return <div className="w-full bg-[#222] py-[2.5rem] flex gap-[1.5rem] flex-col items-center justify-evenly">
        <div className="flex gap-[.4rem] justify-center flex-wrap">

            {SocialLinks?.map((item)=>{
                return <Link target="_blank" className={`text-white shadow bg-[#56565624] hover:bg-[#56565654] border border-t-[#4c4c4c8f] border-b-[transparent] border-x-[#56565624] rounded-md hover:scale-[1.2] duration-300 p-[1rem] text-[1.3rem]`} key={item.id} href={item.link}>
                    {item.icon}
                </Link>
            })}

        </div>

        <button onClick={()=>goToHome()} className="toHomeRocket">
            <BsRocket className="text-white text-[2rem] hover:-translate-y-1 duration-500"/>
        </button>

        <div className="flex items-center gap-1 font-[100] text-[.8rem]">
            <span><FaRegCopyright className="text-[#aaa]" /></span>
            <span style={{fontFamily : lato.style.fontFamily}} className="text-[#aaa]">{name} {new Date().getFullYear()}</span>
        </div>
    </div>
}

export default Footer;