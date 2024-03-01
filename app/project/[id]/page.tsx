'use client'
import { Lato, Roboto_Slab } from "next/font/google";
import { useRouter } from "next/navigation"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link"
import { name, projects } from "@/INFO"
import Image from "next/image"
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";



const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: '300', subsets: ["latin"] });




const ProjectPage = ({params} : any)=>{
    const navigate = useRouter();
    const {id} = params;
    if(id > projects.length-1) navigate.push('/');

    const project = projects[id];

    useEffect(()=>{
        const lenis = new Lenis();
        function raf(time : any){
          lenis.raf(time)
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        return ()=>lenis.destroy();
      },[]);


    return <div className="w-full bg-white min-h-[100vh]">
        <div className="upperNav z-10 sticky top-0 bg-black py-4 px-6 flex justify-between">
        <Link href='/' className="hover:opacity-80 text-[#ccc] font-medium cursor-pointer">{name.toLocaleUpperCase() || "USER"}</Link>
        <button onClick={()=>navigate.back()} className="flex gap-2 font-semibold items-center">
            <div className="icon text-2xl"><MdOutlineKeyboardBackspace/></div>
            <span>Go Back</span>
        </button>
        </div>

        <div className="projectDiv py-4 px-6 text-black">
            <div style={{fontFamily : lato.style.fontFamily}} className="title text-2xl font-normal tracking-[1px] text-center uppercase">{project?.name}</div>
            <div style={{fontFamily : robotSlab.style.fontFamily}} className="type text-center mt-1 text-[#0000007f] text-[0.9rem]">{project?.type}</div>
            
            <div className="img sm:w-[75%] md:w-[40%] mt-4 border-[2px] border-[#e1e0e0] shadow-md rounded-md overflow-hidden mx-auto relative aspect-video">
                <Image src={project?.imgLink} alt="projectImg" className="rounded-md" layout="fill" />
            </div>

            <div className="flex flex-wrap justify-center mt-6 gap-8">
                {project.stackUsed?.map((stack,i)=>{
                    return <div key={`stackpill_${i}`} className="bg-[#000000] border-[#454545] !border-x-0 shadow !border-b-0 border-[2px] text-white px-4 py-2 rounded text-nowrap">
                        {stack}
                    </div>
                })}
            </div>

            <div style={{fontFamily : lato.style.fontFamily}} className="desc mx-auto mt-8 w-3/4 text-center text-[#000000a5] tracking-[1px]">{project?.desc}</div>

            <div className="Links flex mt-8 gap-10 justify-center">
                <Link style={{fontFamily : lato.style.fontFamily}} target="_blank" href={project?.liveLink} className="liveLink hover:text-white border-[2px] px-4 py-2 border-black duration-300 font-extralight text-xl hover:border-blue-800 hover:bg-blue-800 text-center min-w-[6rem]">Live</Link>
                <Link style={{fontFamily : lato.style.fontFamily}} target="_blank" href={project?.gitLink} className="liveLink hover:text-white border-[2px] px-4 py-2 border-black duration-300 font-extralight text-xl hover:border-blue-800 hover:bg-blue-800 text-center min-w-[6rem]">Source</Link>
            </div>
        </div>
    </div>
}

export default ProjectPage;