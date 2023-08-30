import Case from "@/components/Case";
import { Orbitron, Outfit } from "next/font/google";
import Image from "next/image";

import w1 from "../../public/assets/w1.png"
import w2 from "../../public/assets/w2.png"

import w3 from "../../public/assets/w3.png"

import w4 from "../../public/assets/w4.png"


const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export default function OurCases({id}) {
  return (
    <div className="py-36">
      <div className="text-[44px] flex flex-col leading-normal text-center text-white">
        <div className={orb.className}>Our Cases</div>
        <div className="text-[18px] leading-7 pt-12 capitalize">
          <div id={id} className={outfit.className}>
            We’re proud to share some of our current and past cases, with some
            of the web3 industry leaders.
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-screen md:px-48 justify-between">
        
        <Case title="WEB3 CLIENTS" number="100+"></Case>
        <Case title="FOLLOWERS GAINED" number="142K+"></Case>
        <Case title="EMPLOYEES" number="20+"></Case>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col items-center justify-center gap-8">
        <Image src={w1} ></Image>
        <Image src={w2} className="lg:pt-24"></Image>
        <Image src={w3}></Image>
        <Image src={w4} className="lg:pt-24"></Image>
      </div>
    </div>
  );
}
