import { Check } from "lucide-react";

export function Pricing () {
  const features = [
    "Unlimited projects",
    "Priority support",
    "Advanced analytics",
    "Custom integrations",
    "API access",
    "Team collaboration",
    "Audit logs",
    "24/7 monitoring",
  ];

  return (
    <section className="py-24 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to scale your business, no hidden fees
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="p-8 text-center border-b border-white/10">
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>
              <p className="mt-4 text-lg text-gray-300">
                Perfect for growing businesses
              </p>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-4 px-8 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
