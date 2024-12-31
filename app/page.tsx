'use client'
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Experience from "@/Components/Experience/Experience";
import Footer from "@/Components/Footer/Footer";
import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import Projects from "@/Components/Projects/Projects";
import Resume from "@/Components/Resume/Resume";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState} from "react";
import Skills from "@/Components/Skills/Skills";
import { motion } from "motion/react";

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

  const [page,setPage] = useState("home");

  return (
    
    <motion.div layoutScroll key={"HomePage"} layout className="relative w-full bg-white text-black">
      <NavBar page={page} />
      <Home setPage={setPage}/>
      <About setPage={setPage}/>
      <Skills setPage={setPage}/>
      <Experience setPage={setPage}/>
      <Projects setPage={setPage}/>
      <Resume/>
      <Contact setPage={setPage}/>
      <Footer/>
    </motion.div>
  );
}
