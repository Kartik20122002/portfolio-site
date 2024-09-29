import { skills } from "@/INFO";
import { Lato  } from "next/font/google";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
const lato = Lato({weight : "300" , subsets : ["latin"]});
import {motion , Reorder} from "framer-motion"
import { useState } from "react";


const Skills = ()=>{
  const [skillsA,setSkills] = useState(skills)
    return <motion.div id="skills" className="py-[6rem] bg-white min-h-[100vh] text-black">

    <motion.div className={`${lato.className} passionTitle text-center font-light tracking-[1px] text-3xl`}>What I Excel</motion.div>

    <motion.div className="mt-[3.5rem] flex gap-12 md:gap-4 flex-col md:flex-row px-2 justify-evenly">
              <motion.div className="pills flex flex-wrap justify-evenly gap-10">
                {skillsA?.map((skillLink, i) => {
                  return (
                    <motion.div layout initial={{scale : 0.3 , opacity : 0.5}} whileInView={{scale : 1 , opacity : 1}} viewport={{once : true}}
                    transition={{delay : Math.random()*0.15 , duration : 0.5}}
                      key={`skill_${i}`}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={skillLink.name}
                      className="pillImg relative w-[10%] aspect-square"
                    >
                      <Image
                        src={skillLink.icon}
                        className="grayscale hover:grayscale-0 hover:scale-110 duration-300 ease-in-out "
                        alt="skill"
                        layout="fill"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
              <Tooltip id="my-tooltip" />
            </motion.div>
</motion.div>
}

export default Skills;