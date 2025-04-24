import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="pt-14 pb-8 bg-oxford-blue relative">
      <Image
        src="/images/ellipse.png"
        alt="Ellipse decoration"
        width={800}
        height={800}
        className="absolute top-[-10px] right-[-10px] opacity-50 pointer-events-none z-0"
      />
      <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/boldo-logo.png" alt="Boldo Logo" width={100} height={40} className="w-[162px] h-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link href="/product" className="text-white">
            Product
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Button variant="outline" className="rounded-[24px] text-oxford-blue px-10 py-2">Log In</Button>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 relative">
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute bottom-[-480px] left-[80%] -translate-x-1/2 w-[500px] h-auto z-20"
        />
      </div> */}
    </nav>
  )
}