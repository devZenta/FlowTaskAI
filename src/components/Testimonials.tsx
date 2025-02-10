import Image from 'next/image';

export function Testimonials () {
    const testimonials = [
      {
        text: "This platform has transformed how we handle our workflow. The automation features have saved us countless hours.",
        author: "John Doe",
        role: "CEO, TechCorp",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        text: "The best SaaS solution we've ever used. The interface is intuitive and the support team is exceptional.",
        author: "Jane Smith",
        role: "CTO, StartupX",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        text: "Incredible features and amazing support team! They've helped us scale our operations seamlessly.",
        author: "Mike Johnson",
        role: "Founder, DevLabs",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        text: "The analytics capabilities are outstanding. We've gained valuable insights into our business.",
        author: "Sarah Wilson",
        role: "Data Analyst, Analytics Co",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        text: "Security features are top-notch. We feel confident handling sensitive data on this platform.",
        author: "David Chen",
        role: "Security Lead, SecureNet",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        text: "The integration capabilities have allowed us to streamline our entire workflow.",
        author: "Emma Davis",
        role: "Operations Manager, FlowTech",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    ];
  
    return (
      <section className="py-24 bg-[#030014]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              What our customers say
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of satisfied users worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[600px] overflow-hidden">
            {[1, 2, 3].map((column) => (
              <div 
                key={column} 
                className="space-y-8 animate-scroll-vertical"
                style={{
                  animation: `scrollVertical ${30 + column * 5}s linear infinite`,
                  animationDelay: `${column * -10}s`
                }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {/*<Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />*/}
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.author}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };