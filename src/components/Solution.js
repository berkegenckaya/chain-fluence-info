
const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "700", subsets: ["latin"] });
import { Orbitron, Outfit } from "next/font/google";
import Image from "next/image"
import inf from "../../public/assets/inf.png"


export default function Solution({icon,title}){
    return(
        <div className="bg-[#1B1B1B] hover:bg-[#9E00FF] flex rounded-md border border-[#393939] flex-col md:px-12 md:pt-12 lg:px-24 lg:pt-16 justify-center items-center">
            <Image src={icon} width={60} height={60}></Image>
            <div className={outfit.className}> <p className="text-[16px] w-[140px] pb-4 lg:pt-4 lg:pb-16">{title}</p></div>
        </div>
    )
}