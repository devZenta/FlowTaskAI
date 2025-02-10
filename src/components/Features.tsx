import { Zap, Shield, Rocket, Code, Cloud, Lock } from 'lucide-react';

export function Features () {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance"
    },
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: "Developer API",
      description: "Powerful API with comprehensive documentation and SDKs"
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-400" />,
      title: "Cloud Native",
      description: "Built on modern cloud architecture for ultimate scalability"
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-400" />,
      title: "Access Control",
      description: "Granular permissions and role-based access management"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      title: "Instant Deploy",
      description: "Deploy changes instantly with zero-downtime updates"
    }
  ];

  return (
    <section className="py-24 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your workflow efficiently and securely
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 p-3 rounded-lg bg-white/5 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};