import { description, name, tagline } from "@/INFO";
import Image from "next/image";
import { Lato , Roboto_Slab } from "next/font/google";

const lato = Lato({weight : "300" , subsets : ["latin"]});
const robotSlab = Roboto_Slab({weight : '300', subsets : ["latin"]})

const About = ()=>{
    return <div id="about" className="py-[6rem]">

        <div className={`${lato.className} aboutTitle text-center font-light tracking-[1px] text-3xl`}>A LITTLE BIT ABOUT ME</div>

        <div className="imgContainer flex justify-center items-center my-6">
            <div className="wrapperImg bg-[#e5e1d5] rounded-full p-1">
            <div className="imgDiv w-[10rem] h-[10rem] relative rounded-full">
                <Image src="./Avatar/user.svg" className="rounded-full" layout="fill" alt={name} />
            </div>
            </div>
        </div>

        <div className={`${robotSlab.className} infoDiv text-center md:w-1/2 mx-auto mt-8 font-light leading-relaxed`}>
        Hey! My name is Kartik and I&apos;m a <span className="text-[blue] font-medium"> web developer </span> with a passion for front end development and animations. I&apos;m currently a final year student at <span className="text-[blue] font-medium"> IIT Dhanbad</span> pursuing a Bachelor of Technology in <span className="text-[blue] font-medium"> Electrical Engineering</span>. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
        </div>

        <div className={`${robotSlab.className} tagDiv text-center md:w-1/2 mx-auto mt-8 font-light leading-relaxed`}>
            {tagline}
        </div>

        <div className="idkDiv">

        </div>
    </div>
}

export default About;