import { expTagline } from "@/INFO";
import { Lato, Roboto_Slab } from "next/font/google";
import Image from "next/image";

const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]});

const experience = [
    {
        companyName : 'Kalvee',
        role : 'Full Stack Developer',
        skills : ['React.js' , 'Node.js' , 'SCSS']
    },
    {
        companyName : 'Gypssy',
        role : 'Front-End Developer',
        skills : ['Next.js' , 'Redux' , 'Tailwind CSS']
    },
]

const skills = [
    { name: 'nextjs', icon: '/Skills/nextjs.svg' },
    { name: 'reactjs', icon: '/Skills/react.ico' },
    { name: 'firebase', icon: '/Skills/firebase.ico' },
    { name: 'framer', icon: '/Skills/framer.ico' },
    { name: 'typescript', icon: '/Skills/typescript.ico' },
    { name: 'nodejs', icon: '/Skills/nodejs.ico' },
    { name: 'git', icon: '/Skills/git.ico' },
    { name: 'github', icon: '/Skills/github.ico' },
    { name: 'html', icon: '/Skills/html.ico' },
    { name: 'css', icon: '/Skills/css.ico' },
    { name: 'javascript', icon: '/Skills/javascript.ico' },
    { name: 'database', icon: '/Skills/database.ico' },
    { name: 'java', icon: '/Skills/java.ico' },
    { name: 'python', icon: '/Skills/python.ico' },
    { name: 'mongodb', icon: '/Skills/mongodb.ico' },
    { name: 'nextauth', icon: '/Skills/nextauth.png' },
    { name: 'postman', icon: '/Skills/postman.ico' },
    { name: 'redux', icon: '/Skills/redux.ico' },
    { name: 'sql', icon: '/Skills/sql.ico' },
    { name: 'tailwind', icon: '/Skills/tailwind-css.ico' },
    { name: 'vs code', icon: '/Skills/visual-studio-code.ico' },
]

const Experience = ()=>{
    return <div id="experience" className="py-[6rem] flex flex-col items-center gap-8">
        <div style={lato.style} className="experienceHeading text-3xl tracking-[1px] font-light text-center">EXPERIENCE</div>

        <div style={robotSlab.style} className="expTagline font-light leading-[1.7] text-center w-5/6 md:w-[40%]">{expTagline}</div>

        <div className="idkDiv min-w-full flex gap-8 md:gap-0 flex-col md:flex-row px-4 md:px-[10rem]">

            <div className="skillsDiv basis-3/5 shrink-0 grow px-4">
                <div style={{fontFamily : lato.style.fontFamily}} className="skilsHeading uppercase font-semibold tracking-[1px] text-lg">Some Technologies I&apos;ve worked with:</div>
                <div className="skillsPills mt-8">
                    <div className="pills flex flex-wrap justify-evenly gap-10">
                        {
                        skills?.map((skillLink,i)=>{
                            return <div key={`skill_${i}`} className="pillImg relative w-[10%] aspect-square">
                            <Image src={skillLink.icon} className="grayscale hover:grayscale-0 duration-300 ease-in-out " alt="skill" layout="fill" />
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
                     <div className="expPills flex flex-col gap-4 justify-evenly">
                     {experience?.map((item,i)=>{
                        return <div key={`pillExp_${i}`} className="pillofComp border flex flex-col gap-2 rounded-lg p-3">
                            <div className="compName text-center text-2xl">{item.companyName}</div>
                            <div style={lato.style} className="role text-center text-lg">{item.role}</div>
                            <div className="compSkills mt-2 flex flex-wrap gap-2 md:gap-0 justify-evenly">
                                {item?.skills?.map((compSkill,j)=>{
                                    return <span key={`compSkill_${i}_${j}`} className="py-1 px-2 border rounded-md hover:bg-slate-100 cursor-default duration-1000" >{compSkill}</span>
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