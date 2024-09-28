import { experience, expTagline, skills, aboutme } from "@/INFO";
import { Lato, Roboto_Slab } from "next/font/google";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { useScroll, useTransform , motion } from "framer-motion";
import { useRef } from "react";

const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: "300", subsets: ["latin"] });

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({target: ref,offset: ["start start", "end start"],});
  const translateX1 = useTransform(scrollYProgress,[0, 0.5,1],[0, 1000 ,1000],{ clamp: false })
  

  
  return (
    <div ref={ref} id="" className="flex flex-col items-center bg-slate-900 text-slate-400 ">
      <div className="overlay absolute h-full w-full" />

      <div className={`w-full min-h-[100vh] px-6 gap-4 py-24 border-[4px] border-[green] relative flex z-[1] justify-start items-start`}>

            <div className="left basis-1/2 sticky top-36 border flex flex-col justify-center">

              <div className={`text-center border items-center justify-center flex mb-16 font-bold tracking-[1px] text-3xl`}>
                Experience
              </div>
              <div style={robotSlab.style} className="expTagline w-full text-lg font-light leading-[1.7] text-center">
                {aboutme + expTagline}
              </div>
            </div>

            <div className="right basis-1/2 flex flex-col border justify-center items-center">

              <div className=" flex flex-col gap-[120vh] justify-evenly items-center">
                {experience?.map((item, i) => {
                  return (
                    <motion.div key={`pillExp_${i}`} style={{translateX : i == 0 ? translateX1 : 0}} className="pillofComp border sticky top-36 w-[70%] flex flex-col gap-2 rounded-lg p-3">
                      <div className="compName text-center text-2xl">
                        {item.companyName}
                      </div>
                      <div style={lato.style} className="role text-center text-lg">
                        {item.role}
                      </div>

                      <div className="locDate flex justify-center items-center gap-4">
                        <div style={lato.style} className="basis-auto">
                          {item.location}
                        </div>
                        <div style={lato.style} className="basis-auto">
                          ({item.dates})
                        </div>
                      </div>

                      <div className="compSkills mt-2 flex flex-wrap gap-2 md:gap-0 justify-evenly">
                        {item?.skills?.map((compSkill, j) => {
                          return (
                            <span
                              key={`compSkill_${i}_${j}`}
                              className="py-2 px-4 border rounded bg-[#313131] border-t-[#4f4f4f] border-b-[transparent] border-x-[#3d3d3d] cursor-default duration-1000"
                            >
                              {compSkill}
                            </span>
                          );
                        })}
                      </div>

                      <div style={lato.style} className="desc text-center text-md">
                        {item.workInfo}
                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </div>

      </div>
    </div>
  );
};

export default Experience;
