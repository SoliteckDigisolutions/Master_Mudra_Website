import { CircleStar } from "lucide-react";
import BlueCard from "./common-comp/BlueCard";
import { CardData } from "@/app/constants";
import SectionName from "./common-comp/SectionName";
import HeadingInfo from "@/app/components/common-comp/HeadingInfo";
export default function Card() {
  return (
    <div id="features" className="lg:px-14 px-4 bg-white pt-8">
       <SectionName name="Platform Features" icon={CircleStar} />
      <div className="max-w-4xl mb-4 mt-4 ">
        <HeadingInfo
          name="Verything You Need to Grow Your Business"
          desc="  Powerful capabilities built to help merchants grow and operate smoothly."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4  gap-6 justify-center min-h-100 ">
        <BlueCard data={CardData} />
      </div>
    </div>
  );
}
