import { FlipWords } from "@/components/ui/flip-words";

export function Header () {
  return (
    <div className="relative bg-[#030014] pt-16">
      <div className="h-[50rem] w-full bg-[#030014] dark:bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient overlay */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#030014] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          <FlipWords words={["Innovant", "Rapide", "Efficace"]} duration={3000}/>
            Your Workflow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            The most powerful platform for modern teams
          </p>
          <div className="flex gap-6 justify-center">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity text-lg font-medium shadow-lg shadow-purple-500/25">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:bg-white/10 transition-colors text-lg font-medium text-white shadow-lg shadow-purple-500/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
