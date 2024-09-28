import { experience, expTagline, aboutme } from "@/INFO";
import { Lato, Roboto_Slab } from "next/font/google";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import {  motion } from "framer-motion";

const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: "300", subsets: ["latin"] });

const Experience = () => {
  
  return (
    <div id="" className="flex flex-col min-h-[100vh] items-center bg-slate-900 text-slate-400 ">
      {/* <div className="overlay absolute h-full w-full" /> */}

      <div className={`w-full min-h-[100vh] px-6 gap-4 py-24 relative flex z-[1] justify-start items-start`}>

            <div className="left basis-1/2 sticky top-36 flex flex-col justify-center">

              <div className={`text-center items-center justify-center flex mb-16 font-bold tracking-[1px] text-3xl`}>
                Experience
              </div>
              <div style={robotSlab.style} className="expTagline w-full text-lg font-light leading-[1.7] text-center">
                {aboutme + expTagline}
              </div>
            </div>

            <div className="right basis-1/2 flex flex-col justify-center items-center">

              <div className=" flex flex-col gap-16 justify-evenly items-center">
                {experience?.map((item, i) => {
                  return (
                    <motion.div key={`pillExp_${i}`}  className="pillofComp cursor-pointer border-slate-800 hover:border-transparent hover:border-t-slate-700 -inset-x-4 -inset-y-4 z-0 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg hover:bg-slate-800 duration-300 border w-[70%] flex flex-col gap-2 rounded-xl p-5">
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
                        -
                        <div style={lato.style} className="basis-auto">
                          ({item.dates})
                        </div>
                      </div>

                      <div className="compSkills mt-2 flex flex-wrap gap-2 md:gap-0 justify-evenly">
                        {item?.skills?.map((compSkill, j) => {
                          return (
                            <span
                              key={`compSkill_${i}_${j}`}
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                            >
                              {compSkill}
                            </span>
                          );
                        })}
                      </div>

                      <div style={lato.style} className="desc text-start mt-4 text-md">
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
