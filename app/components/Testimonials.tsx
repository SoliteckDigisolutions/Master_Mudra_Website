 import { Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Sharma",
    quote:
      "Mudra Master helped my shop accept payments easily — reliable every day.",
    role: "Shop Owner",
  },
  {
    name: "Seema Patel",
    quote:
      "Fast settlements and clear reports — makes accounting simple.",
    role: "Merchant",
  },
  {
    name: "Amit Rao",
    quote:
      "Great support and uptime. Customers trust our services more now.",
    role: "Store Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What Merchants Say
        </h2>
        <p className="mt-3 text-gray-600">
          Real feedback from our partner retailers.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
<div className="flex w-max animate-marquee gap-6 py-4">
  {[...testimonials, ...testimonials].map((t, index) => (
    <div
      key={index}
      className="group relative w-[380px] flex-shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-200 via-white to-green-200 p-6 shadow-sm "
    >
      {/* Background Glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200/40 blur-2xl" />

      {/* Quote Icon */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl ">
          <Quote className="h-20 w-20 text-white" />
        </div>

        <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
          <BadgeCheck className="h-4 w-4 text-green-600" />
          <span className="text-xs font-medium text-green-700">
            Verified
          </span>
        </div>
      </div>

      {/* Testimonial */}
      <p className="text-base leading-7 text-slate-600">
        "{t.quote}"
      </p>

      {/* User */}
      <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          {t.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            {t.name}
          </h4>
          <p className="text-sm text-slate-500">
            {t.role}
          </p>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-green-200" />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}