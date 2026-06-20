import Image from "next/image";
import payment from "@/public/assets/b.svg";
import flower from "@/public/assets/Vector.svg";
import rec from "@/public/assets/Rectangle 18.svg"

import { CircleStar } from "lucide-react";

import SectionName from "./common-comp/SectionName";
import HeadingInfo from "@/app/components/common-comp/HeadingInfo";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center gap-10"
    >
      {/* Image Section */}
     <div className="relative w-full lg:w-1/2 flex justify-center">
  <div className="absolute inset-0 bg-white rounded-full"></div>

  <Image
    src={payment}
    alt="About Mudra Master"
    priority
    className="relative z-10 w-full max-w-xl object-contain"
  />
</div>

     {/* Content Section */}
<div className="w-full lg:w-1/2">
  <SectionName
    name="About Mudra Master"
    icon={CircleStar}
  />

  <div className="mt-4">
    <HeadingInfo name="Our Mission Empowering Local Businesses" />
  </div>

  <div className="relative mt-8">
   

    {/* Content */}
    <div className="relative border-l-4 border-green-500 pl-6 lg:pl-8">
      <p className="text-lg leading-8 text-slate-700">
        Mudra Master empowers businesses, retailers, and entrepreneurs with
        innovative digital payment and financial solutions designed to simplify
        everyday transactions and unlock new growth opportunities.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        With secure technology, reliable infrastructure, and a commitment to
        excellence, Mudra Master delivers seamless payment experiences, money
        transfer services, bill payments, and other financial solutions through
        a single, user-friendly platform.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Our mission is to bridge the gap between technology and accessibility by
        bringing powerful digital services to businesses of all sizes. We strive
        to create a future where every retailer, merchant, and customer can
        benefit from fast, secure, and convenient financial services.
      </p>
    </div>

   
  </div>
</div>
    </section>
  );
}