import Image from "next/image";
import { Orbitron, Outfit } from "next/font/google";

const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });
export default function AboutUs({id}) {
  return (
    <div className="py-16">
      <div className="text-[44px] flex flex-col leading-normal text-start z-10 text-white">
        <div className="w-screen flex pt-24 md:flex-row flex-col  justify-center">
          <div className="flex flex-col pt-12 px-12">
            <div className="text-[44px]">
              <div className={orb.className}>About Us</div>
            </div>

            <div id={id} className="text-[18px] mr-12 pt-12 flex items-start leading-7 capitalize">
              <div className={outfit.className}>
                At Bucks, we're not just marketers – we're architects of the
                Web3 landscape. Our team of visionaries, strategists, and
                blockchain experts is committed to sculpting a future where
                decentralized technologies empower businesses and individuals.
                From the first line of code to the final user interface, we're
                with you every step of the way.
                <br></br>
                <br></br>
                Our industry-leading experts in traditional and Web3 marketing
                offer SEO, Google Ads, social media management, influencer
                marketing, paid ad campaigns, blog creation, content creation,
                community management, and public relations services to our
                ever-growing client base.
                <br></br>
                <br></br>
                📢 Ready to embark on a Web3 journey that will redefine your brand's presence? Join hands with Bucks and let's create a decentralized future together! 🌐🚀
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center md:justify-center ">
            <Image
              src="/assets/gruop.png"
              width={600}
              height={460}
              className="lg:min-w-[700px] md:min-w-[400px] pt-12 min-w-[300px] px-8"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
