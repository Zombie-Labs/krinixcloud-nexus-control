
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const vpsPlans = [
  {
    name: "Basic VPS",
    price: 11,
    cpu: 2,
    ram: 16,
    storage: 200,
    bandwidth: 0,
    features: [
      "2 vCPU Cores",
      "16GB RAM",
      "200GB NVMe SSD",
      "∞TB Bandwidth",
      "99.9% Uptime",
      "Linux OS",
      "1 Dedicated IPv4",
      "DDOS PROTECTION"
    ],
    popular: false
  },
  {
    name: "Essentials VPS",
    price: 16,
    cpu: 4,
    ram: 32,
    storage: 500,
    bandwidth: 0,
    features: [
      "4 vCPU Cores",
      "16GB RAM",
      "500GB NVMe SSD",
      "∞TB Bandwidth",
      "99.9% Uptime",
      "Linux OS",
      "1 Dedicated IPv4",
      "DDoS Protection"
    ],
    popular: true
  },
  {
    name: "Enterprise VPS",
    price: 23,
    cpu: 8,
    ram: 64,
    storage: 500,
    bandwidth: 0,
    features: [
      "8 vCPU Cores",
      "64GB RAM",
      "500GB NVMe SSD",
      "∞TB Bandwidth",
      "99.9% Uptime",
      "Linux OS",
      "1 Dedicated IPv4",
      "DDoS Protection"
    ],
    popular: false
  }
];

const VPSSection = () => {
  return (
    <section id="vps" className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-krinix-600">VPS</span> Hosting Solutions
          </h2>
          <p className="text-lg text-gray-600">
            High-performance virtual private servers with dedicated resources and full root access.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vpsPlans.map((plan, index) => (
            <Card key={index} className={`border ${plan.popular ? 'border-krinix-400 shadow-lg animate-pulse-glow' : 'border-gray-200'} relative overflow-hidden`}>
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-krinix-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <CardHeader>
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">CPU</p>
                      <p className="font-bold text-lg">{plan.cpu} Cores</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">RAM</p>
                      <p className="font-bold text-lg">{plan.ram}GB</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">SSD</p>
                      <p className="font-bold text-lg">{plan.storage}GB</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Bandwidth</p>
                      <p className="font-bold text-lg">{plan.bandwidth}TB</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-krinix-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? 'bg-krinix-600 hover:bg-krinix-700' : ''}`}>
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need more resources? We offer custom VPS solutions.</p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default VPSSection;
