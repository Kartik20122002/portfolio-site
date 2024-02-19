'use client'
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import Home from "@/Components/Home/Home";
import ProjectModal from "@/Components/Modals/ProjectModal";
import NavBar from "@/Components/NavBar/NavBar";
import Passion from "@/Components/Passion/Passion";
import Projects from "@/Components/Projects/Projects";
import Resume from "@/Components/Resume/Resume";
import Lenis from "@studio-freight/lenis";
import { createContext, useEffect, useState} from "react";

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
    <div className="relative w-full bg-white text-black">
      <NavBar />
      <Home/>
      <About/>
      <Passion/>
      <Experience/>
      <Resume/>
      <Projects/>
      <div className="spaceDiv"></div>
    </div>
  );
}
