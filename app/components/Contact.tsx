import { CircleStar } from "lucide-react";
import { CardDataContact } from "../constants";
import SectionName from "./common-comp/SectionName";

export default function Card() {
  return (
    <section id="contact" className="bg-white px-4 pt-8 lg:px-14">
      <SectionName name="Platform Features" icon={CircleStar} />

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        Powerful capabilities built to help merchants grow, manage payments,
        and operate their business smoothly.
      </p>

      <div className="mt-12 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        {/* Features */}
        <div className="space-y-8">
          {CardDataContact.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex items-start gap-5 border-b border-slate-100 pb-6 last:border-0"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=19.0759837,72.8776559&z=15&output=embed"
              loading="lazy"
              className="h-[420px] w-full"
              title="Business Location Map"
            />
          </div>
         
        </div>
      </div>
    </section>
  );
}