export function Partners () {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      description: "Enterprise Solutions Partner"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      description: "Cloud Infrastructure Partner"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      description: "Technology Innovation Partner"
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
      description: "Social Integration Partner"
    }
  ];

  return (
    <section className="py-24 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400">
            Partnering with the world's most innovative companies
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex flex-col items-center p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              <div className="h-12 flex items-center mb-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 object-contain opacity-60 hover:opacity-80 transition-opacity filter invert"
                />
              </div>
              <p className="text-sm text-gray-400 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};