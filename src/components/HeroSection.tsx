
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Premium <span className="text-krinix-600">Minecraft</span> & <span className="text-krinix-600">VPS</span> Hosting Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
              Experience lag-free gaming and lightning-fast servers with KrinixCloud. 
              Dedicated resources, 99.9% uptime, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-6">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-6">
                View Plans
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-krinix-400 to-krinix-600 flex items-center justify-center text-white">
                  99%
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-krinix-400 to-krinix-600 flex items-center justify-center text-white">
                  24/7
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-krinix-400 to-krinix-600 flex items-center justify-center text-white">
                  SSD
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Trusted by 2,000+</span> gamers and businesses
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square max-w-[500px] mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-krinix-400/20 to-krinix-700/20 rounded-xl"></div>
              <img
                src="/placeholder.svg"
                alt="Server Infrastructure"
                className="rounded-xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-krinix-100 rounded-lg rotate-6 animate-float hidden md:block">
                <div className="w-full h-full flex items-center justify-center bg-minecraft-grass/25">
                  <div className="w-12 h-12 bg-minecraft-grass minecraft-block"></div>
                </div>
              </div>
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-krinix-100 rounded-lg -rotate-12 animate-float animation-delay-200 hidden md:block">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-400 minecraft-block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
