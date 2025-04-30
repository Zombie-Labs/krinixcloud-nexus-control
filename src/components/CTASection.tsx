
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-krinix-900 to-krinix-800 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Premium Hosting?
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Join thousands of satisfied customers who trust KrinixCloud for their hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-krinix-900 hover:bg-gray-100">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-krinix-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
