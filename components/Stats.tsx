import { Button } from "@/components/ui/button"
import Image from "next/image"

// Assuming a custom checkmark icon is available at this path
const CheckIcon = () => (
  <Image src="/images/check.png" alt="Checkmark" width={36} height={36} />
)

export default function Stats() {
  return (
    <section className="py-[120px]">
      <div className="container mx-auto px-14">
        <div className="flex flex-col lg:flex-row items-center gap-x-[150px]">
          {/* Left Column - Image with Overlay */}
          <div className="lg:w-1/2 relative mb-12 lg:mb-0">
            <Image
              src="/images/group-2.png"
              alt="Customer connection stats"
              width={494}
              height={541}
              className="w-full h-auto rounded-3xl"
            />
            {/* Overlay Card */}
            {/* <div className="absolute bottom-[-40px] left-[40px] w-[290px] bg-white p-6 rounded-xl shadow-lg">
              <Image
                src="/images/stats-chart.png"
                alt="Stats Chart"
                width={242}
                height={136}
                className="w-full h-auto mb-4"
              />
              <p className="text-2xl font-bold text-black">30%</p>
              <p className="text-gray-600">More income in June</p>
            </div> */}
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-4xl font-normal leading-[56px] text-black max-w-[493px] mb-10">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-[27px]">
                <CheckIcon />
                <p className="text-xl font-normal text-black">We connect our customers with the best.</p>
              </div>
              <div className="flex items-center space-x-5">
                <CheckIcon />
                <p className="text-xl font-normal text-black">Advisor success customer launch party.</p>
              </div>
              <div className="flex items-center space-x-5">
                <CheckIcon />
                <p className="text-xl font-normal text-black">Business-to-consumer long tail.</p>
              </div>
            </div>
            <Button size="lg" className="bg-oxford-blue text-white rounded-[56px] px-14 py-8 text-xl font-bold hover:bg-oxford-blue/90">
              Start now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}