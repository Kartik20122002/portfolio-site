'use client'
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import Passion from "@/Components/Passion/Passion";
import Resume from "@/Components/Resume/Resume";
import Lenis from "@studio-freight/lenis";
import { useEffect} from "react";

export default function App() {


  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time : any){
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return ()=>lenis.destroy();
  },[]);



  return (
    <div className="relative bg-white text-black">
      <NavBar />
      <Home/>
      <About/>
      <Passion/>
      <Experience/>
      <Resume/>
      <div className="spaceDiv"></div>
    </div>
  );
}
