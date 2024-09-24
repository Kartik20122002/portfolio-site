'use client'
import { Lato, Roboto_Slab } from "next/font/google";
import { useRouter } from "next/navigation"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link"
import { name, projects } from "@/INFO"
import Image from "next/image"
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";



const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: '300', subsets: ["latin"] });




const ProjectPage = ({params} : any)=>{
    const navigate = useRouter();
    const {id} = params;
    const [isLive , setIsLive] = useState(false);
    
    const project = projects[id];

    const toggleLive = ()=>{
        setIsLive(e => !e);
    }
    
    useEffect(()=>{
        if(id > projects.length-1) navigate.push('/');
        const lenis = new Lenis();
        function raf(time : any){
          lenis.raf(time)
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        return ()=>lenis.destroy();
      },[]);


    return <div style={robotSlab.style} className="w-full bg-[#181818] flex flex-col gap-4 min-h-[100vh]">
        <div className="z-10 sticky top-0 bg-black py-4 px-6 flex justify-between">
        <Link href='/' className="hover:opacity-80 text-[#ccc] font-medium cursor-pointer">{name.toLocaleUpperCase() || "USER"}</Link>
        <button onClick={()=>navigate.back()} className="flex text-white gap-2 font-semibold items-center">
            <div className="icon text-2xl"><MdOutlineKeyboardBackspace/></div>
            <span>Go Back</span>
        </button>
        </div>

        <div className="grow flex flex-col gap-4 ">
            <div className="title text-center md:!text-end px-10 pt-4 text-5xl font-bold text-white">
                {project.name}
            </div>
            <div className="flex flex-col md:!flex-row grow">
                <div className="flex flex-col gap-2 basis-1/2 grow">
                    <div className="w-[90%] border-[2px] border-[#e1e0e0] shadow-md rounded-md overflow-hidden m-4 relative aspect-video">
                        {
                            isLive ? 
                            <iframe src={project?.liveLink} className="absolute !-top-[50%] !-left-[50%] !w-[200%] scale-[0.5] !h-[200%] border border-[violet]" ></iframe>
                            :
                            <Image src={project?.imgLink} alt="projectImg" className="rounded-md" layout="fill" />
                        }
                    </div>
                    <div className="Links ml-4 flex flex-wrap mt-4 gap-10 justify-start">
                        <Link style={{fontFamily : lato.style.fontFamily}} target="_blank" href={project?.liveLink} className="text-white font-semibold shadow bg-[#7d7d7d24] hover:bg-[#81818154] border border-t-[#6161618f] border-b-[transparent] border-x-[#9b9b9b24]  rounded-md hover:scale-[1.1] duration-300 px-4 py-2 text-[1.3rem]">Live Link</Link>
                        <Link style={{fontFamily : lato.style.fontFamily}} target="_blank" href={project?.gitLink} className="text-white font-semibold shadow bg-[#7d7d7d24] hover:bg-[#81818154] border border-t-[#6161618f] border-b-[transparent] border-x-[#9b9b9b24]  rounded-md hover:scale-[1.1] duration-300 px-4 py-2 text-[1.3rem]">Github Link</Link>
                        <button style={{fontFamily : lato.style.fontFamily}} onClick={()=>toggleLive()} className="text-white font-semibold shadow bg-[#7d7d7d24] hover:bg-[#81818154] border border-t-[#6161618f] border-b-[transparent] border-x-[#9b9b9b24]  rounded-md hover:scale-[1.1] duration-300 px-4 py-2 text-[1.3rem]">{isLive ? 'View Image' : 'View Live'}</button>
                    </div>
                </div>
                <div className=" basis-1/2 grow flex flex-col gap-6">
                    <div className="p-4 text-white flex flex-col gap-3">
                    <div className="font-bold text-2xl">About</div>
                    {project?.desc?.map((item,i)=>{
                            return <li key={`desc_${id}_${i}`}>{item}</li>
                        })}
                    </div>
                    <div className="flex flex-col px-4 gap-4">
                        <div className="font-bold text-2xl text-white">Tech Stack</div>
                        <div className="flex flex-wrap gap-4">
                        {project.stackUsed?.map((stack,i)=>{
                            return <div key={`stackpill_${i}`} className="bg-[#000000] border-[#454545] !border-x-0 shadow !border-b-0 border-[2px] text-white px-4 py-2 rounded text-nowrap">
                                    {stack}
                                  </div>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="projectDiv py-4 px-6 text-black">
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
        </div> */}
    </div>
}

export default ProjectPage;