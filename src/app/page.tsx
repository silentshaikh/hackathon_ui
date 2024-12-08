import HeroCollectImg from "@/components/HeroCollectImg/HeroCollectImg";
import HeroCollection from "@/components/HeroCollection/HeroCollection";
import HeroHome from "@/components/HeroHome/HeroHome";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <HeroHome/>
    <HeroCollection/>
   </main>
  );
}
