
import { Shield, Cpu, Clock, Zap, Server, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-krinix-600" />,
    title: "DDoS Protection",
    description: "Enterprise-grade protection against network attacks to keep your servers online."
  },
  {
    icon: <Cpu className="h-6 w-6 text-krinix-600" />,
    title: "Dedicated CPU Cores",
    description: "Guaranteed CPU performance with no noisy neighbors or resource contention."
  },
  {
    icon: <Clock className="h-6 w-6 text-krinix-600" />,
    title: "99.9% Uptime",
    description: "Our infrastructure is designed for reliability and continuous operation."
  },
  {
    icon: <Zap className="h-6 w-6 text-krinix-600" />,
    title: "Instant Setup",
    description: "Your server is ready in seconds, not hours. Start playing immediately."
  },
  {
    icon: <Server className="h-6 w-6 text-krinix-600" />,
    title: "NVMe SSD Storage",
    description: "Lightning-fast storage technology for quicker loading and chunk generation."
  },
  {
    icon: <Users className="h-6 w-6 text-krinix-600" />,
    title: "24/7 Support",
    description: "Our expert team is always available to help with any issues or questions."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-krinix-600">KrinixCloud</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Our focus on performance, reliability, and customer satisfaction sets us apart from other hosting providers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:border-krinix-200 hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-krinix-50 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
