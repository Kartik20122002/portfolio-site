import { firstName } from "@/INFO";
import { Lato } from "next/font/google";

const lato = Lato({weight : "300" , subsets : ["latin"]});

const Home = ()=>{
    return <div id="home" className="min-w-full HomeDiv min-h-[100vh]">
        <div className="overlay min-w-full min-h-full flex justify-center items-center">
                <div className="Title  text-white flex flex-col gap-4">
                    <div style={lato.style}  className="Name text-[3.75rem] tracking-[3px] font-light">HI, I&apos;M {firstName?.toLocaleUpperCase() || "User"}</div>
                    <div className="Position text-[#ddd] text-center ">
                        Software Developer & Web Enthusiast
                    </div>
                </div>
        </div>
  </div>
}

export default Home;