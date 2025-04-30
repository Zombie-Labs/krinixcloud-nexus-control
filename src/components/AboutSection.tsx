
const stats = [
  { value: '2,000+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Customer Support' },
  { value: '5', label: 'Global Datacenters' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-krinix-600">KrinixCloud</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2021, KrinixCloud was built by gamers who were frustrated with the poor performance and unreliable service of existing hosting providers. Our mission is to deliver exceptional hosting experiences with uncompromising performance, reliability, and customer support.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we host thousands of Minecraft servers and provide VPS solutions to businesses worldwide. Our infrastructure is powered by the latest hardware, hosted in state-of-the-art datacenters across five global locations to ensure low latency wherever your users are located.
            </p>
            <p className="text-gray-700">
              What sets us apart is our dedication to customer satisfaction. Our technical team consists of experienced system administrators and Minecraft experts who are passionate about providing the best possible service.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-krinix-600 mb-2">{stat.value}</p>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-krinix-600 mr-2">•</span>
                  <span className="text-gray-700">Customer-first approach to service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-krinix-600 mr-2">•</span>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-krinix-600 mr-2">•</span>
                  <span className="text-gray-700">Continuous investment in cutting-edge technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-krinix-600 mr-2">•</span>
                  <span className="text-gray-700">Environmental responsibility in our operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
