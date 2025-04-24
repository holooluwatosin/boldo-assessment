import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    image: "/images/services/service1.png",
  },
  {
    title: "Even cooler feature",
    description: "Learning curve network effects return on investment.",
    image: "/images/services/service2.png",
  },
  {
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    image: "/images/services/service3.png",
  },
]

export default function Features() {
  return (
    <section className="py-[84px]">
      <div className="container mx-auto px-14">
        <div className="text-center mb-[80px]">
          <p className="text-xl leading-[32px] text-sonic-silver mb-4">Our Services</p>
          <h2 className="text-5xl text-black font-normal leading-[72px] max-w-[840px] mx-auto">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-[100px]">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="mb-6 overflow-hidden rounded-3xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={354}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl leading-[36px] font-normal text-black mb-3">{feature.title}</h3>
              <p className="text-xl text-sonic-silver font-normal mb-7">{feature.description}</p>
              <Link href="#" className="group inline-flex items-center text-xl leading-[36px] text-oxford-blue font-bold border-b border-oxford-blue pb-2">
                Explore page
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}