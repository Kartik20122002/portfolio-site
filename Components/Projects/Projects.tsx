import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/INFO";
import { useEffect, useRef } from "react";
import { useScroll, useTransform , motion, useMotionValue, useInView } from "motion/react";


const lato = Lato({ weight: "300", subsets: ["latin"] });


const Projects = ({ setPage }: { setPage: (page: string) => void }) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })

    const translateY = useTransform(scrollYProgress,[0,1],[0,-500])
    const translateY2 = useTransform(scrollYProgress,[0,1],[0,-400])

    const viewRef = useRef(null);
      const isInView = useInView(viewRef);

    useEffect(()=>{
      if (isInView) setPage("#work");
    },[isInView])

    return <motion.div layout ref={ref} id="work" className={`py-[8rem] flex flex-col items-center gap-2 bg-white text-black`}>

        <motion.div layout style={{ fontFamily: lato.style.fontFamily , translateY : translateY }} className="heading font-thin text-3xl tracking-[1px]">WHAT I&apos;VE DONE</motion.div>
        <motion.div ref={viewRef} layout style={{ fontFamily: lato.style.fontFamily , translateY : translateY }} className="moreTagline font-light tracking-[1px]">{"(more coming soon)"}</motion.div>

        <div className="projectDiv flex flex-col justify-evenly md:flex-row w-full py-6 flex-wrap px-4 md:px-[10rem] md:gap-[2%]">

            {
                projects.map((project, i) => {
                    
                    return <motion.div key={`projext_${i}`} viewport={{ once: true }} initial={{ opacity: 0 , translateX : 50 }} whileInView={{ opacity: 1 , translateX : 0 } } transition={{ duration : 1, delay : 0.1*i }} layout style={{translateY : translateY2}} className="w-[95%] md:w-[32%] sm:w-[75%] mx-auto md:mx-0">
                         <ProjectPill i={i} key={`projectPill_${i}`} project={project} />
                    </motion.div>
                })
            }

        </div>
    </motion.div>
}

const ProjectPill = ({ project, }: any) => {

    return (
        <>
            <div className="rounded-lg shadow border border-[#a5a5a565] overflow-hidden z-0 w-full mx-auto md:mx-0 relative !aspect-video my-4 basis-[30%]">
                <Image priority={false} src={project?.imgLink} layout="fill" className="inset-4" placeholder="blur" alt="project" />
            </div>

            <Link href={`project/${project?.id}`} className="cursor-pointer text-slate-700 hover:text-blue-600 flex px-4 py-2 rounded-lg justify-center gap-4 items-center">
                <div className="font-semibold text-lg">{project?.name}</div>
            </Link>
        </>
        
    )
}

export default Projects;