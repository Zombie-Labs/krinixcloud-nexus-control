
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Gaming Server Admin",
    content: "KrinixCloud has been a game-changer for our Minecraft community. The performance is outstanding and we've never experienced any downtime. Their support team is always quick to respond."
  },
  {
    name: "Sarah Williams",
    role: "Web Developer",
    content: "I've been using KrinixCloud VPS for hosting client websites for over a year. The speed and reliability are exactly what I needed. Highly recommend their Business VPS plan!"
  },
  {
    name: "Mike Anderson",
    role: "Minecraft Content Creator",
    content: "After trying several hosting providers, KrinixCloud is the only one that met all my requirements. My modded server runs flawlessly, even with 40+ players online."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers think about KrinixCloud hosting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 mr-1">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-krinix-400 to-krinix-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
