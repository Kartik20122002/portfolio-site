import { skills } from "@/INFO";
import { Lato , Roboto_Slab } from "next/font/google";
import Image from "next/image";
import {  FaDev, FaHeadSideVirus, FaLaptopCode } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]});



const Skills = ()=>{
    return <div id="skills" className="py-[6rem] bg-[#F0F0F0]">

    <div className={`${lato.className} passionTitle text-center font-light tracking-[1px] text-3xl`}>What I Excel</div>

    <div className="mt-[3.5rem] flex gap-12 md:gap-4 flex-col md:flex-row px-2 justify-evenly">
              <div className="pills flex flex-wrap justify-evenly gap-10">
                {skills?.map((skillLink, i) => {
                  return (
                    <div
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
                    </div>
                  );
                })}
              </div>
              <Tooltip id="my-tooltip" />
            </div>
</div>
}

export default Skills;