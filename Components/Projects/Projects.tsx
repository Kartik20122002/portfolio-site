import { Lato } from "next/font/google";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/INFO";


const lato = Lato({ weight: "300", subsets: ["latin"] });


const Projects = () => {

    return <div id="work" className={`py-[6rem] flex flex-col items-center gap-2`}>

        <div style={{ fontFamily: lato.style.fontFamily }} className="heading font-thin text-3xl tracking-[1px]">WHAT I&apos;VE DONE</div>
        <div style={{ fontFamily: lato.style.fontFamily }} className="moreTagline font-light tracking-[1px]">{"(more coming soon)"}</div>

        <div className="projectDiv flex flex-col justify-evenly md:flex-row w-full py-6 flex-wrap px-4 md:px-[10rem] md:gap-[2%]">

            {
                projects.map((project, i) => {
                    return <ProjectPill key={`projectPill_${i}`} project={project} />
                })
            }

        </div>
    </div>
}

const ProjectPill = ({ project }: any) => {

    return (
        <div className="rounded-lg shadow border-[2px] border-[#f4f3f3] overflow-hidden z-0 w-[95%] md:w-[32%] sm:w-[75%] mx-auto md:mx-0 relative !aspect-video my-4 basis-[30%]">
            <Image priority={false} src={project?.imgLink} layout="fill" className="inset-4" placeholder="blur" alt="project" />

            <Link href={`project/${project?.id}`} className="projectOverlay cursor-pointer flex bg-[#1d1d1dcc] opacity-0 hover:opacity-100 duration-300 w-full h-full absolute top-0 justify-center items-center">
                <div className="projectBtn rounded-lg text-sm font-normal"><FaSearchPlus className="text-2xl text-white"/></div>
                <div className="projectTitle font-normal text-[0.9rem] text-white absolute  w-full h-10 items-center flex justify-center bottom-0 bg-[#00009C]">{project?.name}</div>
            </Link>

        </div>
    )
}

export default Projects;