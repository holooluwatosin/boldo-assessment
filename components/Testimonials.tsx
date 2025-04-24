'use client'

import * as React from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    author: "Albus Dumbledore",
    role: "Manager @ Howarts",
    avatar: "/images/albus-dumbledore.png" // Update paths if needed
  },
  {
    quote: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    author: "Severus Snape",
    role: "Manager @ Slytherin",
    avatar: "/images/severus-snape.png" // Update paths if needed
  },
  {
    quote: "“Release facebook responsive web design business model canvas seed money monetization.”",
    author: "Harry Potter",
    role: "Team Leader @ Gryffindor",
    avatar: "/images/harry-potter.png" // Update paths if needed
  },
  {
    quote: "“Release facebook responsive web design business model canvas seed money monetization.”",
    author: "Harry Potter",
    role: "Team Leader @ Gryffindor",
    avatar: "/images/harry-potter.png" // Update paths if needed
  },
  // Add more testimonials if needed
]

export default function Testimonials() {
  return (
    <section className="py-[96px] bg-oxford-blue text-white">
      <div className="container mx-auto px-14">
        {/* Header */}
        <div className="flex justify-between items-end mb-[72px]">
          <h2 className="text-5xl font-normal leading-[72px] max-w-[716px]">
            An enterprise template to ramp up your company website
          </h2>
          {/* Carousel Navigation is handled by the Carousel component below */}
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white text-black rounded-xl shadow-lg h-auto">
                  <CardContent className="p-10 flex flex-col justify-between h-full">
                    <p className="text-2xl font-normal leading-[36px] mb-10 max-w-[270px]">{testimonial.quote}</p>
                    <div className="flex items-center space-x-4 mt-auto">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author}/>
                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-base leading-[32px] font-bold text-oxford-blue">{testimonial.author}</p>
                        <p className="text-sm leading-[32px] text-oxford-blue">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-[-100px] right-[8px] flex space-x-4">
            {/* Adjust positioning as needed */}
            <CarouselPrevious className="relative left-auto right-auto top-auto bottom-auto w-14 h-14 rounded-full bg-white text-oxford-blue border-none">
              <ArrowLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="relative left-auto right-auto top-auto bottom-auto w-14 h-14 rounded-full bg-white text-oxford-blue border-none">
              <ArrowRight className="h-6 w-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  )
}