import { experience, expTagline, aboutme } from "@/INFO";
import { Lato, Roboto_Slab } from "next/font/google";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import {  cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: "300", subsets: ["latin"] });

const Experience = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress,[0,0.5,0.9,1],[0,0,-450,-500])
  
  return (
    <motion.div ref={ref} layout id="experience" className="flex flex-col min-h-[100vh] items-center bg-[#171717] text-slate-200 ">
      {/* <div className="overlay absolute h-full w-full" /> */}

      <motion.div layout className={`w-full min-h-[100vh] px-6 gap-4 py-24 relative flex flex-col md:!flex-row z-[1] justify-start items-start`}>

            <motion.div layout style={{translateY}} className="left basis-1/2 md:!sticky md:!top-64 flex flex-col justify-center">

              <motion.div style={lato.style} viewport={{ once: true }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 } } transition={{ duration : 1 }} layout className={`text-center items-center justify-center flex mb-16 font-bold tracking-[1px] text-3xl`}>
                Experience
              </motion.div>
              <motion.div layout style={robotSlab.style} className="expTagline w-full text-lg font-light leading-[1.7] text-center">
                {aboutme + expTagline}
              </motion.div>
            </motion.div>

            <motion.div layout className="right basis-1/2 flex flex-col justify-center items-center">

              <motion.div layout className=" flex flex-col gap-16 justify-evenly items-center">
                {experience?.map((item, i) => {
                  return (
                    <motion.div layout viewport={{ once: true }} initial={{ opacity: 0 , translateY : 100 }} whileInView={{ opacity: 1 , translateY : 0  } } transition={{ duration : 1 , type : "spring" }} key={`pillExp_${i}`}  className="pillofComp cursor-pointer border-[#282828] hover:border-transparent hover:border-t-[#383838] -inset-x-4 -inset-y-4 z-0 lg:-inset-x-6 lg:block lg:group-hover:bg-[#171717] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg bg-[#282828] duration-300 border w-[70%] flex flex-col gap-2 rounded-xl p-5">
                      <motion.div layout className="compName text-center text-2xl">
                        {item.companyName}
                      </motion.div>
                      <motion.div layout style={lato.style} className="role text-center text-lg">
                        {item.role}
                      </motion.div>

                      <motion.div layout className="locDate flex justify-center items-center gap-4">
                        <motion.div layout style={lato.style} className="basis-auto">
                          {item.location}
                        </motion.div>
                        -
                        <motion.div layout style={lato.style} className="basis-auto">
                          ({item.dates})
                        </motion.div>
                      </motion.div>

                      <motion.div layout className="compSkills mt-2 flex flex-wrap gap-2 md:gap-2">
                        {item?.skills?.map((compSkill, j) => {
                          return (
                            <motion.span layout
                              key={`compSkill_${i}_${j}`}
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                            >
                              {compSkill}
                            </motion.span>
                          );
                        })}
                      </motion.div>

                      <motion.div layout style={lato.style} className="desc text-start mt-4 text-md">
                        {item.workInfo}
                      </motion.div>

                    </motion.div>
                  );
                })}
              </motion.div>

            </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Experience;
