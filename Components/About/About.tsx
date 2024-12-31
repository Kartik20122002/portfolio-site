import { aboutme,  experience,  name } from "@/INFO";
import { useScroll, useTransform , motion } from "motion/react";
import { Lato, Roboto_Slab } from "next/font/google";
import { useRef } from "react";

const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: "300", subsets: ["latin"] });

const About = () => {

  const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const translateY = useTransform(scrollYProgress,[0,1],[100,-100])
    const opacitycontent = useTransform(scrollYProgress,[0,1],[1,1])
    
    const opacity = useTransform(scrollYProgress,[0,1],[1,1])

  return (
    <motion.div ref={ref} layout id="about" className="min-w-full min-h-[100vh] overflow-hidden flex items-center">
        <motion.div className="overlay w-full h-full"/>

        <motion.div className="w-full min-h-[100vh] flex z-[1] py-8 justify-center items-center flex-col">

            
      <motion.div layout style={{opacity}} className={`${lato.className} aboutTitle text-center text-white font-light tracking-[1px] text-3xl`}>
        A LITTLE BIT ABOUT ME
      </motion.div>

      <motion.div className={`${robotSlab.className} aboutdiv w-full flex flex-col sm:!flex-row py-[6rem] sm:text-xl font-light leading-relaxed tracking-[1px] gap-4 sm:gap-0 items-center text-white`}>

        <motion.div layout style={{translateY  , opacity : opacitycontent}} className="pr-[2vw] sm:pr-[7vw] pl-[2vw] text-center py-8 sm:pl-[4vw] basis-1/2 grow ">
        Hey! My name is {name} and I&apos;m a{" "}
        <span className="text-[yellow] !font-bold"> Software developer</span> with a
        passion for Web Development and Software Designs. I&apos;m currently a
        working as {experience[0].role} at{" "}
        <span className="text-[#30fd30] !font-bold">{experience[0].companyName}</span>. I completed my Bachelor of Technology degree in <span className="text-[#2c63fbfb] !font-bold"> Electrical Engineering</span> {" "}
         from {" "}
        <span className="text-[#f73131] !font-bold"> IIT Dhanbad</span>
        . I aspire toward a career that will allow me to channel my creativity
        through crafting beautiful software and engaging experiences.
        </motion.div>

        <motion.div style={{translateY  , opacity : opacitycontent}} className="pl-[2vw] sm:pl-[7vw] text-center pr-[2vw] sm:pr-[4vw] basis-1/2 grow ">
        {aboutme}
        </motion.div>

      </motion.div>

      
      </motion.div>

    </motion.div>
  );
};

export default About;
