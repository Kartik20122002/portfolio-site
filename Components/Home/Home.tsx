import { firstName } from "@/INFO";
import Lenis from "@studio-freight/lenis";
import { IoIosArrowDown } from "react-icons/io";
import { BsEject } from "react-icons/bs";

const Home = ()=>{

    const gotoAbout = ()=>{
        const lenis = new Lenis();
    
        const raf = (time : any)=>{
          lenis.raf(time)
          requestAnimationFrame(raf);
        }
        const ele = document.querySelector('#about');
        if(ele) lenis.scrollTo(ele, { duration : 3})
    
        requestAnimationFrame(raf);
    
        return ()=>lenis.destroy();
        }

    return <div id="home" className="min-w-full HomeDiv min-h-[100vh]">
        <div className="overlay min-w-full min-h-full flex justify-center items-center">
                <div className="Title h-full pt-32 text-white flex flex-col gap-4 items-center justify-center">
                    <div className="text-center text-[3.75rem] tracking-[3px] font-light">HI, I&apos;M {firstName?.toLocaleUpperCase() || "User"}</div>
                    <div className="Position text-[#ddd] text-center ">
                        Software Developer & Web Enthusiast
                    </div>
                    <div className="aboutbt mt-32">
                        <IoIosArrowDown onClick={()=>gotoAbout()} className="text-white hover:translate-y-1 duration-300 cursor-pointer font-thin text-6xl"/>
                        {/* <BsEject onClick={()=>gotoAbout()} className="text-white rotate-180 hover:translate-y-1 duration-300 cursor-pointer font-thin text-3xl"/> */}
                    </div>
                </div>
        </div>
  </div>
}

export default Home;