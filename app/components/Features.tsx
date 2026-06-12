import { Globe, BarChart2, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    title: "Global Reach",
    desc: "Enable payments and collections across regions with local compliance.",
    icon: Globe,
  },
  {
    title: "Analytics",
    desc: "Clear transaction insights and reports for smarter business decisions.",
    icon: BarChart2,
  },
  {
    title: "Secure",
    desc: "Bank-grade security and fraud prevention to protect customers.",
    icon: ShieldCheck,
  },
  {
    title: "Merchant Tools",
    desc: "Built-in merchant management tools for onboarding and settlements.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="features-title" className="text-3xl font-bold text-gray-900">Platform Features</h2>
          <p className="mt-3 text-gray-600">Powerful capabilities built to help merchants grow and operate smoothly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
