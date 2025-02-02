import { firstName } from "@/INFO";
import Lenis from "@studio-freight/lenis";
import {
    useScroll,
    useTransform,
    motion,
    easeInOut,
    useInView,
} from "motion/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface HomeProps {
    setPage: Dispatch<SetStateAction<string>>;
}

const Home = ({ setPage }: HomeProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });
    
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, -1]);
    
    const gotoAbout = () => {
        const lenis = new Lenis();
        
        const raf = (time: any) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        const ele = document.querySelector("#about") as HTMLElement;
        // Disable the rule for this line
        // @ts-ignore        
        if (ele) lenis.scrollTo(ele, { duration: 3 });
        requestAnimationFrame(raf);
        
        return () => lenis.destroy();
    };
    
    const viewRef = useRef(null);
    const isInView = useInView(viewRef);

    useEffect(() => {
        if (isInView) setPage("#home");
    }, [isInView]);

    const transition = { duration: 0.35, easings: easeInOut };

    return (
        <motion.div
            ref={ref}
            layout
            id="home"
            className="min-w-full HomeDiv min-h-[100vh]"
        >
            <motion.div
                layout
                className="overlay min-w-full min-h-full flex justify-center items-center"
            >
                <motion.div
                    layout
                    className="Title h-full pt-32 text-white flex flex-col gap-6 items-center justify-center"
                >
                    <motion.div
                    ref={viewRef}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, translateY: -25 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={transition}
                        layout
                        style={{ opacity }}
                        className="text-center text-[3.75rem] tracking-[3px] font-light"
                    >
                        HI, I&apos;M {firstName?.toLocaleUpperCase() || "User"}
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, translateY: 25 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={transition}
                        layout
                        style={{ opacity }}
                        className="Position text-[#ddd] text-center "
                    >
                        Software Developer & Web Enthusiast
                    </motion.div>
                    <motion.div
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={transition}
                        layout
                        style={{ opacity }}
                        className="aboutbt mt-32"
                    >
                        <IoIosArrowDown
                            onClick={() => gotoAbout()}
                            className="text-white hover:translate-y-1 duration-300 cursor-pointer font-thin text-6xl"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Home;
