import { AuroraBackgroundDemo } from "@/components/landing/AuroraBackgroundDemo";
import { Hero1 } from "@/components/landing/hero1";
import CompareImg from "@/components/landing/CompareImg";
import Techstack from "@/components/landing/Techstack";
import Issue from "@/components/landing/Issue";
import Flowchart from "@/components/landing/Flowchart";
import Feasibility from "@/components/landing/Feasibility";
import GlobeStats from "@/components/landing/globeStats";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
export default function Home() {
  return (
    // <AuroraBackgroundDemo />
    <div className="bg-gray-950">
      <Hero1 />
      <div className="text-white text-4xl font-bold font-mono items-center text-center">Real V/s Fake</div>
      <div className="flex justify-center items-center bg-gray-950">
        <CompareImg />
      </div>
      <div className="text-white text-4xl font-bold font-mono items-center text-center mt-20">Why is Deepfake an pressing Issue ?</div>
      <div className="items-center bg-gray-95 pt-10">
        {/* <Issue /> */}
        <ExpandableCardDemo />
        <GlobeStats />
      </div>
      <div className=" bg-white pt-10">
        <Flowchart />
        <Feasibility />
      </div>
    </div>
  );
}
