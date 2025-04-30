
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const minecraftPlans = [
  {
    name: "Starter",
    price: 5.99,
    ram: 2,
    players: 10,
    storage: 15,
    features: [
      "2GB RAM",
      "10 Player Slots",
      "15GB SSD Storage",
      "Unlimited Traffic",
      "Basic Plugin Support",
      "24/7 Support"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: 12.99,
    ram: 4,
    players: 25,
    storage: 30,
    features: [
      "4GB RAM",
      "25 Player Slots",
      "30GB SSD Storage",
      "Unlimited Traffic",
      "Advanced Plugin Support",
      "24/7 Premium Support",
      "DDoS Protection",
      "Daily Backups"
    ],
    popular: true
  },
  {
    name: "Pro",
    price: 24.99,
    ram: 8,
    players: 50,
    storage: 50,
    features: [
      "8GB RAM",
      "50 Player Slots",
      "50GB SSD Storage",
      "Unlimited Traffic",
      "Advanced Plugin Support",
      "24/7 Premium Support",
      "DDoS Protection",
      "Daily Backups",
      "Dedicated IP",
      "Priority Support"
    ],
    popular: false
  }
];

const MinecraftSection = () => {
  return (
    <section id="minecraft" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-krinix-600">Minecraft</span> Server Hosting
          </h2>
          <p className="text-lg text-gray-600">
            Low-latency, high-performance Minecraft servers with one-click mod installs and easy configuration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {minecraftPlans.map((plan, index) => (
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
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">RAM</p>
                      <p className="font-bold text-lg">{plan.ram}GB</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Players</p>
                      <p className="font-bold text-lg">{plan.players}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">SSD</p>
                      <p className="font-bold text-lg">{plan.storage}GB</p>
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
          <p className="text-gray-600 mb-4">Need a custom solution? Contact us for personalized plans.</p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default MinecraftSection;
