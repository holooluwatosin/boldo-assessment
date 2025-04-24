import { useState } from 'react';
import Image from 'next/image';
import { Feather, Eye, Sun } from 'lucide-react';

// Placeholder icons - replace with actual icons if available
const FeatherIcon = () => <span className="text-white mr-4">&#x270E;</span>; // Example: Pencil icon
const EyeIcon = () => <span className="text-oxford-blue mr-4">&#x1F441;</span>; // Example: Eye icon
const SunIcon = () => <span className="text-oxford-blue mr-4">&#x2600;</span>; // Example: Sun icon

const connectionItems = [
  {
    id: 1,
    text: 'We connect our customers with the best.',
    IconComponent: Feather,
  },
  {
    id: 2,
    text: 'Advisor success customer launch party.',
    IconComponent: Eye,
  },
  {
    id: 3,
    text: 'Business-to-consumer long tail.',
    IconComponent: Sun,
  },
];

export default function CustomerConnect() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <section className="pb-[100px]">
      <div className="container mx-auto px-14">
        <div className="flex flex-col lg:flex-row items-center gap-x-[100px]">
          {/* Left Column - Text and Interactive Boxes */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-normal leading-[56px] text-black max-w-[493px] mb-16">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>
            <div className="space-y-6">
              {connectionItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center w-full py-4 px-5 rounded-md shadow-md text-left transition-colors duration-200 max-w-[500px] ${
                    activeItem === item.id
                      ? 'bg-oxford-blue text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  <item.IconComponent
                    color={activeItem === item.id ? '#ffffff' : '#0A2640'}
                    size={24}
                  />
                  <span className="text-base leading-[28px] font-semibold ml-3">{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Overlay */}
          <div className="lg:w-1/2 relative">
            <Image
              src="/images/group-1.png" // Assuming this is the correct image
              alt="Customer connection chart"
              width={444}
              height={458}
              className="w-full h-auto rounded-3xl"
            />
            {/* Overlay Card */}
            {/* <div className="absolute bottom-[-40px] left-[40px] w-[290px] bg-white p-6 rounded-xl shadow-lg max-w-[493px]">
              <Image
                src="/images/donut-chart.png" // Placeholder
                alt="Donut Chart"
                width={242}
                height={150} // Adjusted height for donut chart
                className="w-full h-auto mb-4"
              />
              <ul className="space-y-2 text-sm text-gray-700">
                <li><span className="font-bold text-blue-500">•</span> 35% - Agile Development</li>
                <li><span className="font-bold text-green-400">•</span> 30% - Investor bandwidth</li>
                <li><span className="font-bold text-gray-800">•</span> 35% - A/B testing</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}