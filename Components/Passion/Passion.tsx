import { Lato , Roboto_Slab } from "next/font/google";
import { FaLaptopCode } from "react-icons/fa";
const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]});

const data = [
    {
        icon : <FaLaptopCode />,
        name : 'DEVELOPMENT',
        desc : "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
    },
    {
        icon : <FaLaptopCode />,
        name : 'DEVELOPMENT',
        desc : "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
    },
    {
        icon : <FaLaptopCode />,
        name : 'DEVELOPMENT',
        desc : "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
    },
]

const Passion = ()=>{
    return <div id="passion" className="py-[6rem] bg-[#F0F0F0]">

    <div className={`${lato.className} passionTitle text-center font-light tracking-[1px] text-3xl`}>What I Excel</div>

    <div className="workContainer mt-[3.5rem] flex gap-12 md:gap-4 flex-col md:flex-row justify-evenly">
        {
            data?.map((item : any,index : any)=>{
                return <div className="flex flex-col gap-7"  key={`workItem_${index}`}>
                    <div className="workIconContainer border flex justify-center items-center">
                        <div className="workIcon flex items-center justify-center text-white text-5xl p-[4rem] rounded-full aspect-square bg-[#00009C]">
                            {item?.icon}
                        </div>
                    </div>
                    <div className="workDetailContainer flex justify-center items-center flex-col gap-6">
                        <div className="workTitle font-light text-[#000] tracking-[1px]">{item?.name}</div>
                        <div style={robotSlab.style} className="workDesc text-center font-light ">{item?.desc}</div>
                    </div>
                </div>
            })
        }
    </div>
</div>
}

export default Passion;