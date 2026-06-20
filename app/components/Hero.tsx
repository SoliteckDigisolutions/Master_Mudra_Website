import Image from "next/image";
import Link from "next/link";
import mockup from "@/public/assets/MM-3 1.svg";
import { CircleStar } from "lucide-react";
import SectionName from "./common-comp/SectionName";
import Hero from "@/app/components/Hero"

export default function HeroSection() {
  return (
    <section id="home" className="relative   overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
  <div className="mx-auto max-w-8xl ">
    <div className="grid items-center gap-12 lg:mt-20  lg:h-fit lg:grid-cols-2">
      
      {/* Image */}
      <div className="order-2 lg:order-1 flex justify-start">
        <div className="relative">
          <div className="absolute inset-0 scale-102 rounded-full bg-gradient-to-r from-blue-300 to-green-300 opacity-100 blur-3xl" />
<Link href="#hero">
          <Image
            src={mockup}
            alt="Mudra Master App"
            priority
            className="relative z-10 w-full lg:max-w-[280px] max-w-md sm:max-w-md lg:max-w-md xl:max-w-xl"
          />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="order-1 pt-6 lg:pt-0 lg:order-2 px-4 lg:p-0 text-center lg:-mt-25 lg:text-left">
      
        <SectionName name ="  Trusted Digital Payments" icon={CircleStar} />

        <h1 className="mt-6 text-4xl leading-18 font-bold text-gray-900 sm:text-4xl lg:text-4xl xl:text-6xl">
          Powering Every
          <span className="block text-green-600">
            Transaction
          </span>
          with Confidence
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
          Mudra Master is a secure digital payment platform that enables
          businesses and individuals to send, receive, and manage payments
          effortlessly through a fast, reliable, and user-friendly experience.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="#features"
            className="rounded-xl border border-green-300 px-6 py-3 font-semibold text-green-600 transition-all duration-300 hover:bg-green-500 hover:text-white"
          >
            Get Started
          </Link>

          <Link
            href="#services"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-green-500 hover:text-green-600"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}