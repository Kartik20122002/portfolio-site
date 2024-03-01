import { Lato , Roboto_Slab } from "next/font/google";
import { FaLaptopCode } from "react-icons/fa";
const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]});

const data = [
    {
        icon : <FaLaptopCode />,
        name : 'Front End Development',
        desc : "With a deep-rooted love for frontend development, I thrive on crafting captivating web experiences and exploring the realms of user interface design. As I delve deeper into this dynamic field, my aim is to architect elegant, efficient code that not only enhances user interactions but also serves as a cornerstone for creating visually stunning applications.",
    },
    {
        icon : <FaLaptopCode />,
        name : 'Back End Development',
        desc : "Passionate about backend development, I enjoy crafting efficient systems and optimizing server-side functionality. I strive to engineer clean, scalable code that powers seamless digital experiences, always pushing the boundaries of innovation in the digital realm.",
    },
    {
        icon : <FaLaptopCode />,
        name : 'Software Development',
        desc : "Fueled by a passion for software development, I relish the opportunity to create innovative solutions and streamline processes. Dedicated to writing clean, adaptable code, my goal is to engineer software that not only meets user needs but also paves the way for future advancements in technology.",
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
                        <div className="workIcon flex items-center justify-center text-white text-5xl p-[4rem] rounded-full aspect-square bg-[#00009C]">
                            {item?.icon}
                        </div>
                    </div>
                    <div className="workDetailContainer flex justify-center items-center flex-col gap-6">
                        <div className="workTitle uppercase font-light text-[#000] tracking-[1px]">{item?.name}</div>
                        <div style={robotSlab.style} className="workDesc text-center font-light ">{item?.desc}</div>
                    </div>
                </div>
            })
        }
    </div>
</div>
}

export default Passion;