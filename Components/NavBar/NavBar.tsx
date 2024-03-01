import { name } from "@/INFO"
import Lenis from "@studio-freight/lenis"
import { cubicBezier, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { SlMenu } from "react-icons/sl";

const NavBar = ()=>{
   const [compact,setCompact] = useState(false);
   const [goto,setGoto] = useState<any>(null);
   const {scrollY} = useScroll();
   const navRef = useRef(null) as any;
   const [showMenu,setMenu] = useState<boolean>(true);

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

    setMenu(false);
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

    return ()=>lenis.destroy();
}

   },[goto])


  return <nav ref={navRef} className="fixed duration-500 ease-in-out flex items-center justify-between md:px-[3rem] px-[1rem] py-7 z-10 w-full">
        <div onClick={()=>setGoto('#home')} className="hover:opacity-80 text-[#ccc]  font-medium cursor-pointer">{name.toLocaleUpperCase() || "USER"}</div>

        <div className="hidden md:!flex gap-8">
            {
                Links.map((link : any)=>{
                    return <div onClick={()=>setGoto(link.id)} key={`navLink${link?.id}`} className="text-[0.8rem] text-[#fff] duration-200 cursor-pointer font-normal tracking-[1px] hover:text-[#ccc]">{link?.name}</div>
                })
            }
        </div>


        <div className="flex md:!hidden relative">
        <button onClick={()=>setMenu(!showMenu)} className="menuBtn">
            <SlMenu className="text-3xl font-extralight text-white"/>
        </button>

        {
            showMenu ? <div className="absolute top-[150%] right-[100%] min-w-[50vw] flex glass flex-col gap-4 bg-[#2f2f2f34] px-6 py-3 rounded-md shadow-sm border-[2px] border-t-[#4848485c] border-b-[#2f2f2f08] border-x-[#2f2f2f06]">
            {Links.map((link : any)=>{
                return <div onClick={()=>setGoto(link.id)} key={`navLink${link?.id}`} className="text-white font-semibold text-center cursor-pointer">{link?.name}</div>
            }) }
            </div>: null
        }

        </div>
    </nav>
}

export default NavBar;