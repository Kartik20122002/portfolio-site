import { name } from "@/INFO"
import Lenis from "@studio-freight/lenis"
import {  circIn, cubicBezier, useScroll } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react"

const NavBar = ()=>{
   const [compact,setCompact] = useState(false);
   const [goto,setGoto] = useState<any>(null);
   const {scrollY} = useScroll();
   const navRef = useRef(null) as any;

   const Links = [
        { id : '#about' , name : "ABOUT" },
        { id : '#passion' , name : "PASSION" },
        { id : '#experience' , name : "EXPERIENCE" },
        { id : '#work' , name : "WORK" },
        { id : '#contact' , name : "CONTACT" },
   ]


   scrollY.on('change',(latest : any)=>{
    if(goto) setGoto(null);
    if(latest >= 100) setCompact(true);
    else setCompact(false);
   });

   useEffect(()=>{
    if(compact){
        navRef.current.style.background = '#000';
        navRef.current.style.paddingTop= '.85rem';
        navRef.current.style.paddingBottom = '.85rem';
    }
    else{
        navRef.current.style.background = 'none';
        navRef.current.style.paddingTop= '1.75rem';
        navRef.current.style.paddingBottom = '1.75rem';
    }
   },[compact])

   useEffect(()=>{

    if(goto){
    const lenis = new Lenis();

    const raf = (time : any)=>{
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    const ele = document.querySelector(goto);
    if(ele) lenis.scrollTo(ele, {easing : cubicBezier(0.5, 0, 0.75, 0), duration : 1.2})

    requestAnimationFrame(raf);

    return ()=>lenis.destroy();}

   },[goto])


  return <nav ref={navRef} className="fixed duration-500 ease-in-out flex justify-between md:px-[3rem] py-7 z-10 w-full">
        <div onClick={()=>setGoto('#home')} className="hover:opacity-80 text-[#ccc]  font-medium cursor-pointer">{name.toLocaleUpperCase() || "USER"}</div>

        <div className="flex gap-8">
            {
                Links.map((link : any)=>{
                    return <div onClick={()=>setGoto(link.id)} key={`navLink${link?.id}`} className="text-[0.8rem] text-[#fff] duration-200 cursor-pointer font-normal tracking-[1px] hover:text-[#ccc]">{link?.name}</div>
                })
            }
        </div>
    </nav>
}

export default NavBar;