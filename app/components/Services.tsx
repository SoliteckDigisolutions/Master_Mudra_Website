import {
  ArrowRight,
  CircleStar,
  CreditCard,
  Fingerprint,
  IndianRupee,
  Smartphone,
} from "lucide-react";

import SectionName from "./common-comp/SectionName";
import HeadingInfo from "@/app/components/common-comp/HeadingInfo";

const services = [
  {
    title: "DMT",
    content:
      "Instant domestic money transfers with secure tracking and fast settlement.",
    icon: IndianRupee,
  },
  {
    title: "AEPS",
    content:
      "Aadhaar-enabled payments and withdrawals for reliable customer service.",
    icon: Fingerprint,
  },
  {
    title: "Recharge",
    content:
      "Mobile and DTH top-ups for customers and merchants in one place.",
    icon: Smartphone,
  },
  {
    title: "BBPS",
    content:
      "Unified bill payments for electricity, water, and other utilities.",
    icon: CreditCard,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionName name="Services" icon={CircleStar} />

          <HeadingInfo
            name="Trusted Payment Services for Every Business"
            desc="Explore secure, easy-to-use digital services built for retailers, merchants, and customers in every neighborhood."
          />
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className="group">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-100">
                  <Icon className="h-7 w-7 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}