import { Lato, Roboto_Slab } from "next/font/google";
import Image from "next/image";
import youtubepro from "@/public/Projects/YoutubePro.png"
import gmanager from "@/public/Projects/Gmanager.png"
import texttools from "@/public/Projects/Text-Tools.png"
import { IoClose } from "react-icons/io5";

const lato = Lato({ weight: "300", subsets: ["latin"] });
const robotSlab = Roboto_Slab({ weight: '300', subsets: ["latin"] });


const projects = [
    {
        id: 0,
        name: "Youtube Pro",
        type : 'Progressive Web App',
        imgLink: youtubepro,
        desc : "Youtube Pro is ad-free video streaming platform created by me.",
        liveLink: 'www.youtubepro.vercel.app',
        gitLink : '#'
    },
    {
        id: 1,
        name: "Gmanager",
        type : 'Web App',
        imgLink: gmanager,
        desc : "Gmanger is one of its kind",
        liveLink : '#',
        gitLink : '#',
    },
    {
        id: 2,
        name: "Text-Tools",
        type : 'Web App',
        imgLink: texttools,
        desc : 'Text-Tools is project made by me in my second year of college.',
        liveLink : '#',
        gitLink : '#'
    },

]


const ProjectModal = ()=>{
    const project = projects[0]

    return <div className="fixed top-0 bottom-0 w-full bg-[#00000076] pt-[10vh] overflow-y-auto pb-[10vh] z-20 h-[100vh]">

        <div className="mainCard bg-white w-[90%] sm:w-3/4 md:w-1/2 min-h-[190vh] mx-auto rounded-lg border border-[#dcdbdb] shadow p-2">

            <div className="modalHeader flex justify-center relative">
                <div className="titles w-full flex flex-col gap-1 items-center">
                    <div style={{fontFamily : lato.style.fontFamily}} className="title text-xl font-semibold tracking-[1px]">{project.name}</div>
                    <div className="type text-[0.8rem] font-light italic">{project?.type}</div>
                </div>
                <div className="closeBtn absolute right-0 h-full w-[10%] flex justify-center">
                    <button className="h-fit"><IoClose className="text-3xl"/></button>
                </div>
            </div>
            
        </div>
    </div>
}
export default ProjectModal;