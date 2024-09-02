import { experience, expTagline, skills } from "@/INFO";
import { Lato, Roboto_Slab } from "next/font/google";
import Image from "next/image";

const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]});


const Experience = ()=>{
    return <div id="experience" className="flex flex-col items-center gap-8 text-white">
        <div className="overlay absolute h-full w-full" />
        
        <div style={lato.style} className="experienceHeading mt-8 z-[1] text-white text-3xl tracking-[1px] font-light text-center">EXPERIENCE</div>

        <div style={robotSlab.style} className="expTagline z-[1] text-white font-light leading-[1.7] text-center w-5/6 md:w-[40%]">{expTagline}</div>

        <div className="min-w-full z-[1] text-white min-h-fit flex gap-8 md:gap-0 flex-col md:flex-row mb-8 px-4 md:px-[10rem]">

            <div className="skillsDiv basis-3/5 shrink-0 grow px-4">
                <div style={{fontFamily : lato.style.fontFamily}} className="skilsHeading uppercase font-semibold tracking-[1px] text-lg">Some Technologies I&apos;ve worked with:</div>
                <div className="skillsPills mt-8">
                    <div className="pills flex flex-wrap justify-evenly gap-10">
                        {
                        skills?.map((skillLink,i)=>{
                            return <div key={`skill_${i}`} className="pillImg relative w-[10%] aspect-square">
                            <Image src={skillLink.icon} className="grayscale hover:grayscale-0 hover:scale-110 duration-300 ease-in-out " alt="skill" layout="fill" />
                            <div className="toolTip hidden absolute -bottom-6 left-0 w-full text-nowrap text-sm font-[500] text-center uppercase">{skillLink.name}</div>
                        </div>
                        })
                        }
                    </div>
                </div>
            </div>

            <div className="expDiv basis-2/5 shrink-0 grow px-4">

                <div style={{fontFamily : lato.style.fontFamily}} className="expHeading text-center uppercase font-semibold tracking-[1px] text-lg">Where I&apos;ve Worked</div>
                <div className="expPills mt-8">
                     <div className="expPills flex flex-col gap-6 justify-evenly">
                     {experience?.map((item,i)=>{

                        return <div key={`pillExp_${i}`} className="pillofComp  flex flex-col gap-2 rounded-lg p-3">
                            <div className="compName text-center text-2xl">{item.companyName}</div>
                            <div style={lato.style} className="role text-center text-lg">{item.role}</div>
                            <div className="compSkills mt-2 flex flex-wrap gap-2 md:gap-0 justify-evenly">
                                {item?.skills?.map((compSkill,j)=>{
                                    return <span key={`compSkill_${i}_${j}`} className="py-2 px-4 border rounded bg-[#313131] border-t-[#4f4f4f] border-b-[transparent] border-x-[#3d3d3d] cursor-default duration-1000" >{compSkill}</span>
                                })}
                            </div>
                        </div>

                     })} 
                    </div>  
                </div>
            </div>
        </div>

    </div> 
}

export default Experience;