import { Banner, Faq, FunFacts, History, ServicesSection, Solution, Sources, WorkingFor } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
  <div style={{backgroundColor:'white'}}>
    <Banner />
    <div style={{marginTop:'-100px'}}>

    <FunFacts/>
    </div>
    <ServicesSection/>
    <Sources/>
    <Solution/>
    <History/>
    <WorkingFor/>
    <Faq/>
  </div>
  );
}
