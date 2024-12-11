import HeroCollectImg from "@/components/HeroCollectImg/HeroCollectImg";
import HeroCollection from "@/components/HeroCollection/HeroCollection";
import HeroHome from "@/components/HeroHome/HeroHome";
import HomeNeural from "@/components/HomeNeural/HomeNeural";
import HomePost from "@/components/HomePost/HomePost";
import HomeSeller from "@/components/HomeSeller/HomeSeller";
import HomeSummer from "@/components/HomeSummer/HomeSummer";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <HeroHome/>
    <HeroCollection/>
    <HomeSeller/>
    <HomeSummer/>
    <HomeNeural/>
    <HomePost/>
   </main>
  );
}
