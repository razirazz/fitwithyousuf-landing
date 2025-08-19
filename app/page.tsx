import Image from "next/image";
import ThemeChanger from "./src/provider/themechanger";
import SocialLinks from "./src/components/sociallinks";
import HeroPic from "@/app/src/assets/hero-pic.jpg"


export default function Home() {
  return (
    <section className="h-[92vh] w-[100vw] p-5 flex justify-center items-center">
      {/* <Image src={HeroPic} alt="Hero Image" className="absolute z-0 h-full w-auto sm:h-auto sm:-top-12/12"/> */}
      <div className="main-container h-[60vh] w-[80vw] sm:w-[55vw] p-3 sm:p-5 justify-around flex flex-col z-10 backdrop-blur-lg">
        <div className="theme-col basis-10 flex justify-end items-center pb-5 sm:pb-0">
          <ThemeChanger />
        </div>

        <div className="content-container basis-5/6
        flex flex-col sm:flex-row justify-between gap-2">

          <div className="content basis-10/12 flex flex-col justify-center gap-3">

            <div className="hero-head basis-1/12 uppercase font-bold dark:font-semibold text-[0.775em] sm:text-[0.875em] text-(--highlight-color) tracking-[0.15em]">
              Certified Fitness Trainer
            </div>

            <div className="hero-name basis-auto font-black dark:font-extrabold text-[2em]/11 sm:text-[3em]/15 sm:w-[8em] font-(family-name:--font-urbanist)">
              Muhammed Yousuf Ali K
            </div>

            <div className="hero-content basis-5/12 text-left text-[0.9em] dark:font-light sm:text-[1em] pb-3">
              Level 4 Certified Personal Trainer 
              with over 8 years of experience 
              transforming lives through tailored fitness 
              and nutrition programs. 
              Whether your goal is fat loss, 
              muscle gain, improved athletic performance, 
              or a healthier lifestyle — you&apos;re in the right place.
            </div>

          </div>

          <div className="link-container basis-1/12 flex flex-row sm:flex-col justify-start sm:justify-end items-end gap-5 pt-3">
            <SocialLinks />
          </div>

        </div>
        
      </div>
      
    </section>
  );
}
