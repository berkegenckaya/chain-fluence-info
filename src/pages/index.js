import Image from "next/image";
import { Orbitron, Outfit } from "next/font/google";
import tri from "../../public/assets/triangles.png";
import arrow from "../../public/assets/arrow.png";
import doodle from "../../public/assets/doodle.png";
import OurCases from "@/containers/OurCases";
import Solutions from "@/containers/Solutions";
import AboutUs from "@/containers/AboutUs";
import Tweets from "@/components/Tweet";
import ContactUs from "@/containers/ContactUs";


const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#0F0F0F] items-center justify-between px-32 `}
    >
      <div className="flex flex-col pt-32">
        <div className="flex md:flex-row flex-col px-12 md:px-32 w-full justify-center ">
          <div className="z-10  text-[50px] md:text-[65px]  text-white h-full pb-[200px] flex flex-col w-full justify-start items-start ">
            <div className={orb.className}>
              A Web3 Native Marketing
              <span className="text-[#9E00FF]"> Agency</span>
            </div>
            <div className="flex w-full justify-between items-center">
              <Image
                src={arrow}
                width={120}
                height={120}
                className="mt-[10%] animate-pulse lg:w-[120px] lg:flex hidden  lg:h-[120px] md:w-[100px] md:h-[100px] w-[60px] h-[60px]"
              ></Image>
              <div className="text-white w-full h-48 items-center justify-center md:text-lg text-base lg:p-12 pt-[70px] text-[20px] capitalize leading-10">
                <div className={outfit.className}>
                In a world evolving at warp speed, traditional marketing strategies fall short. That's where we step in – combining our expertise in marketing with a deep understanding of Web3, we bridge the gap between your brand and the decentralized landscape. From blockchain startups to established crypto projects, Bucks is your compass, guiding you through uncharted territory with confidence.
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-full md:px-0 ml-[-150px] mt-[-60px] hidden  lg:flex justify-center items-start">
            <Image
              src={tri}
              className=" z-10 relative animate-pulse w-[200px] md:w-[340px] ml-48  "
            ></Image>
          </div>
        </div>
        <div>
        <div className="w-screen h-36 bg-black md:mt-0 mt-32 z-10"></div>
        <Image
                src={doodle}
                
                className="mt-[-60px] z-0 absolute right-[10%]"
              ></Image></div>
      </div>
      <OurCases id="#ourcases"></OurCases>
      <Solutions id="#solutions"></Solutions>
      <AboutUs id="#aboutus"></AboutUs>
     <Tweets></Tweets>
     <ContactUs></ContactUs>
    </main>
  );
}
