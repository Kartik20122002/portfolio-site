'use client'
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Experience from "@/Components/Experience/Experience";
import Footer from "@/Components/Footer/Footer";
import Home from "@/Components/Home/Home";
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
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}
