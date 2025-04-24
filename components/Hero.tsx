import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 bg-[#0A2640]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-white">
              Save time by building fast with Boldo Template
            </h1>
            <p className="text-white text-lg mb-10">
              Funding handshake buyer business-to-business metrics iPad partnership.
              First mover advantage innovator success deployment non-disclosure.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="rounded-[56px] px-14 py-8 bg-medium-aquamarine text-oxford-blue text-lg text-[20px] font-bold">Get Started</Button>
              <Button variant="outline" size="lg" className="rounded-[56px] px-14 py-8 border-[2px] bg-oxford-blue text-white border-white text-lg text-[20px] font-bold">Explore</Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Image src="/images/hero-image.png" alt="Hero Image" width={400} height={250} className="w-full h-auto z-20" />
          </div>
        </div>

        <div className="relative overflow-hidden mt-16 py-8">
          {/* Gradient masks */}
          <div className="absolute top-0 bottom-0 left-0 w-[200px] bg-gradient-to-r from-[#0A2640] to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-[200px] bg-gradient-to-l from-[#0A2640] to-transparent z-10"></div>

          {/* Scrolling content */}
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="inline-flex items-center mx-4">
                <div className="w-[160px]">
                  <Image
                    src="/images/boldo-white.png"
                    alt="Boldo Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="w-[160px]">
                  <Image
                    src="/images/presto.png"
                    alt="Presto Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate the logos for seamless loop */}
            {[...Array(8)].map((_, i) => (
              <div key={`dup-${i}`} className="inline-flex items-center mx-4">
                <div className="w-[160px]">
                  <Image
                    src="/images/boldo-white.png"
                    alt="Boldo Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="w-[160px]">
                  <Image
                    src="/images/presto.png"
                    alt="Presto Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}