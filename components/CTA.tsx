import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="py-[72px]">
      <div className="container mx-auto px-14">
        <div className="bg-oxford-blue rounded-xl p-12 relative overflow-hidden">
          {/* Decorative Ellipse */}
          <Image
            src="/images/ellipse-cta.png" // Replace with actual path if different
            alt=""
            width={800}
            height={800}
            className="absolute top-0 right-0 opacity-30 pointer-events-none z-0"
          />
          <div className="relative z-10 text-center max-w-[700px] mx-auto">
            <h2 className="text-5xl text-white font-normal leading-[72px] mb-12">
              An enterprise template to ramp up your company website
            </h2>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white rounded-[240px] border-none px-8 py-8 text-xl placeholder:text-black w-full sm:w-auto flex-grow placeholder:text-5 placeholder:leading-8"
              />
              <Button
                type="submit"
                className="bg-medium-aquamarine text-oxford-blue rounded-[56px] px-14 py-8 text-xl font-bold hover:bg-medium-aquamarine/90 w-full sm:w-auto whitespace-nowrap"
              >
                Start now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}