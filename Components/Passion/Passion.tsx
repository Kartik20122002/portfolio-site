import { Lato , Roboto_Slab } from "next/font/google";
import {  FaDev, FaHeadSideVirus, FaLaptopCode } from "react-icons/fa";
const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]});

const data = [
    {
        icon : <FaLaptopCode />,
        name : 'Software Development',
        desc : "Fueled by a passion for software development, I relish the opportunity to create innovative solutions and streamline processes. Dedicated to writing clean, adaptable code, my goal is to engineer software that not only meets user needs but also paves the way for future advancements in technology.",
    },
    {
        icon : <FaDev />,
        name : 'Full Stack Development',
        desc : "With a passion for full stack development, I embrace the challenge of building seamless, end-to-end applications that merge robust backend systems with intuitive, visually appealing frontends. My goal is to design and implement efficient, scalable architectures that not only provide smooth user experiences but also ensure optimal performance and maintainability across all layers of the stack.",
    },
    {
        icon : <FaHeadSideVirus />,
        name : 'Problem Solving & DSA',
        desc : "I enjoy solving coding challenges and diving into data structures and algorithms. The process of breaking down complex problems and finding efficient solutions keeps me motivated, helping me refine my problem-solving skills while deepening my understanding of core computer science concepts.",
    },
    
]

const Passion = ()=>{
    return <div id="passion" className="py-[6rem] bg-[#F0F0F0]">

    <div className={`${lato.className} passionTitle text-center font-light tracking-[1px] text-3xl`}>What I Excel</div>

    <div className="workContainer mt-[3.5rem] flex gap-12 md:gap-4 flex-col md:flex-row px-2 justify-evenly">
        {
            data?.map((item : any,index : any)=>{
                return <div className="flex flex-col basis-1/3 grow-1 gap-7"  key={`workItem_${index}`}>
                    <div className="workIconContainer flex justify-center items-center">
                        <div className="workIcon flex items-center justify-center text-white text-3xl md:!text-5xl p-[2rem] md:!p-[3.5rem] rounded-full aspect-square bg-[#00009C]">
                            {item?.icon}
                        </div>
                    </div>
                    <div className="workDetailContainer flex justify-center items-center flex-col gap-6">
                        <div className="workTitle uppercase font-light text-[#000] tracking-[1px]">{item?.name}</div>
                        <div style={robotSlab.style} className="workDesc text-sm md:!text-[1rem] text-center font-light ">{item?.desc}</div>
                    </div>
                </div>
            })
        }
    </div>
</div>
}

export default Passion;