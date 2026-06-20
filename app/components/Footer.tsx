import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/public/assets/Group 1171282893.svg";
import ISO from "@/public/assets/ISO 9001 Certified.png";

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm  text-black py-10 pt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + Certification */}
          <div className="text-center md:text-left">
            <h2 className="text-md  flex  font-bold">
                <Image alt="" height={100}  src={logo}/>
                <Image alt="" height={100}  src={ISO}/>
            </h2>
            <p className="text-sm mt-2 opacity-90">
              ISO 9001:2015 Certified Company
            </p>
                        <p className="text-sm">
              Empowering digital payments across local businesses
            </p> 

                           <p className="text-sm">
              Designed by{" "}
              <span className="font-semibold">
                Soliteck Digisolutions Pvt. Ltd
              </span>
            </p>
          </div>


          {/* Designer Credit */}


        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm opacity-90">
          © 2026 MASTER MUDRA PAYMENTS SOLUTION. All rights reserved.
        </div>

      </div>
    </footer>
  );
}